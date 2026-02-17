'use client';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    X,
    ChefHat,
    Globe,
    Mail,
    Lock,
    Loader2,
    CheckCircle2,
    Package
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// Matches backend: 2-99 chars, lowercase alphanumeric, hyphens, underscores
const subdomainRegex = /^[a-z0-9][a-z0-9_-]{0,98}$/;

const registrationSchema = z.object({
    kitchenName: z.string().min(2, 'Kitchen name must be at least 2 characters'),
    subdomain: z.string()
        .min(2, 'Subdomain must be at least 2 characters')
        .refine(
            (val) => subdomainRegex.test(val.toLowerCase()),
            'Use 2–99 lowercase letters, numbers, hyphens, underscores'
        ),
    plan: z.string().default('none'),
    adminEmail: z.string().email('Invalid email address'),
    adminPassword: z.string().min(8, 'Password must be at least 8 characters'),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

// Map form plan values to backend plan_id (update IDs to match your ServicePlan records)
interface ServicePlan {
    id: number;
    name: string;
    tier: string;
    description: string;
    price_monthly: string;
    trial_days: number;
}

const getRegisterUrl = () => {
    const base = import.meta.env?.VITE_API_URL || process.env.NEXT_PUBLIC_API_URL || 'https://api-kitchen.funadventure.ae';
    return `${base.replace(/\/$/, '')}/api/register-tenant/`;
};

interface CreateTenantDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function CreateTenantDialog({ open, onOpenChange }: CreateTenantDialogProps) {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [apiError, setApiError] = React.useState<string | null>(null);
    const [plans, setPlans] = React.useState<ServicePlan[]>([]);
    const [isLoadingPlans, setIsLoadingPlans] = React.useState(false);

    React.useEffect(() => {
        if (open) {
            const fetchPlans = async () => {
                setIsLoadingPlans(true);
                try {
                    const base = import.meta.env?.VITE_API_URL || process.env.NEXT_PUBLIC_API_URL || 'https://api-kitchen.funadventure.ae';
                    const url = `${base.replace(/\/$/, '')}/api/organizations/plans/`;
                    console.log('Fetching plans from:', url);
                    const res = await fetch(url);
                    console.log('Plans response status:', res.status);
                    if (res.ok) {
                        const data = await res.json();
                        console.log('Plans data received:', data);
                        if (Array.isArray(data)) {
                            setPlans(data);
                        } else {
                            console.error('API returned non-array data for plans:', data);
                        }
                    } else {
                        const errorText = await res.text();
                        console.error('Plans fetch failed:', errorText);
                    }
                } catch (err) {
                    console.error('Failed to fetch plans:', err);
                } finally {
                    setIsLoadingPlans(false);
                }
            };
            fetchPlans();
        }
    }, [open]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<RegistrationForm>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            plan: 'none',
        }
    });

    const onSubmit = async (data: RegistrationForm) => {
        setIsSubmitting(true);
        setApiError(null);

        const payload = {
            name: data.kitchenName.trim(),
            subdomain: data.subdomain.trim().toLowerCase(),
            admin_email: data.adminEmail.trim(),
            admin_password: data.adminPassword,
            ...(data.plan !== 'none' && { plan_id: parseInt(data.plan) }),
        };

        try {
            const res = await fetch(getRegisterUrl(), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const json = await res.json().catch(() => ({}));

            if (!res.ok) {
                const errs = json?.errors;
                if (errs && typeof errs === 'object') {
                    const messages = Object.entries(errs)
                        .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
                        .join('\n');
                    setApiError(messages);
                } else {
                    setApiError(json?.detail || json?.message || `Request failed (${res.status})`);
                }
                setIsSubmitting(false);
                return;
            }

            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onOpenChange(false);
                reset();
            }, 3000);
        } catch (err) {
            setApiError(err instanceof Error ? err.message : 'Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog.Root open={open} onOpenChange={(o) => { setApiError(null); onOpenChange(o); }}>
            <AnimatePresence>
                {open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
                            />
                        </Dialog.Overlay>
                        <Dialog.Content asChild>
                            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    className="w-full max-w-lg bg-[#FDF2F0] rounded-[32px] p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
                                >
                                    {!isSuccess ? (
                                        <>
                                            <div className="flex justify-between items-start mb-6">
                                                <Dialog.Title className="text-3xl font-bold text-slate-800">
                                                    Register Your Kitchen
                                                </Dialog.Title>
                                                <Dialog.Close asChild>
                                                    <button className="p-2 rounded-full hover:bg-slate-200/50 transition-colors">
                                                        <X className="w-5 h-5 text-slate-500" />
                                                    </button>
                                                </Dialog.Close>
                                            </div>

                                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                                {apiError && (
                                                    <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-sm text-red-700 whitespace-pre-line">
                                                        {apiError}
                                                    </div>
                                                )}

                                                <div className="space-y-3">
                                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                                                        Kitchen Details
                                                    </label>

                                                    <div className="space-y-3">
                                                        <div className="space-y-1">
                                                            <div className="relative group">
                                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                                                    <ChefHat className="w-5 h-5" />
                                                                </div>
                                                                <input
                                                                    {...register('kitchenName')}
                                                                    placeholder="Kitchen Name *"
                                                                    className={cn(
                                                                        "w-full bg-white border-2 border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-800 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-0 transition-all outline-none font-medium",
                                                                        errors.kitchenName && "border-red-400 focus:border-red-400"
                                                                    )}
                                                                />
                                                            </div>
                                                            {errors.kitchenName && (
                                                                <p className="text-xs text-red-500 ml-4 font-medium">{errors.kitchenName.message}</p>
                                                            )}
                                                        </div>

                                                        <div className="space-y-1">
                                                            <div className="relative group">
                                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                                                    <Globe className="w-5 h-5" />
                                                                </div>
                                                                <input
                                                                    {...register('subdomain')}
                                                                    placeholder="Subdomain (e.g. downtown-kitchen) *"
                                                                    className={cn(
                                                                        "w-full bg-white border-2 border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-800 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-0 transition-all outline-none font-medium lowercase",
                                                                        errors.subdomain && "border-red-400 focus:border-red-400"
                                                                    )}
                                                                />
                                                            </div>
                                                            <p className="text-[11px] text-slate-500 ml-4 leading-tight font-medium">
                                                                Used for your kitchen URL. Letters, numbers, hyphens, underscores.
                                                            </p>
                                                            {errors.subdomain && (
                                                                <p className="text-xs text-red-500 ml-4 font-medium">{errors.subdomain.message}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                                                        Subscription
                                                    </label>
                                                    <div className="relative group">
                                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors">
                                                            <Package className="w-5 h-5" />
                                                        </div>
                                                        <select
                                                            {...register('plan')}
                                                            className="w-full bg-white border-2 border-slate-200 rounded-2xl py-4 pl-12 pr-10 text-slate-800 appearance-none focus:border-indigo-600 outline-none transition-all cursor-pointer font-medium disabled:opacity-50"
                                                            disabled={isLoadingPlans}
                                                        >
                                                            <option value="none">No Plan (assign later)</option>
                                                            {Array.isArray(plans) && plans.map((p) => (
                                                                <option key={p.id} value={p.id}>
                                                                    {p.name} ({p.price_monthly === "0.00" ? 'Free' : `AED ${parseFloat(p.price_monthly).toLocaleString()}/mo`})
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                                                        Admin Account
                                                    </label>

                                                    <div className="space-y-3">
                                                        <div className="space-y-1">
                                                            <div className="relative group">
                                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                                                    <Mail className="w-5 h-5" />
                                                                </div>
                                                                <input
                                                                    {...register('adminEmail')}
                                                                    type="email"
                                                                    placeholder="Admin Email *"
                                                                    className={cn(
                                                                        "w-full bg-white border-2 border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-800 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-0 transition-all outline-none font-medium",
                                                                        errors.adminEmail && "border-red-400 focus:border-red-400"
                                                                    )}
                                                                />
                                                            </div>
                                                            {errors.adminEmail && (
                                                                <p className="text-xs text-red-500 ml-4 font-medium">{errors.adminEmail.message}</p>
                                                            )}
                                                        </div>

                                                        <div className="space-y-1">
                                                            <div className="relative group">
                                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                                                    <Lock className="w-5 h-5" />
                                                                </div>
                                                                <input
                                                                    {...register('adminPassword')}
                                                                    type="password"
                                                                    placeholder="Admin Password (min 8 characters) *"
                                                                    className={cn(
                                                                        "w-full bg-white border-2 border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-800 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-0 transition-all outline-none font-medium",
                                                                        errors.adminPassword && "border-red-400 focus:border-red-400"
                                                                    )}
                                                                />
                                                            </div>
                                                            {errors.adminPassword && (
                                                                <p className="text-xs text-red-500 ml-4 font-medium">{errors.adminPassword.message}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-end gap-3 pt-4">
                                                    <Dialog.Close asChild>
                                                        <button
                                                            type="button"
                                                            className="px-6 py-4 rounded-2xl font-bold text-[#E4550F] hover:bg-white/50 transition-colors"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </Dialog.Close>
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="flex-1 sm:flex-none px-10 py-4 bg-[#E4550F] hover:bg-[#C84A0D] text-white rounded-2xl font-bold transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                                                    >
                                                        {isSubmitting ? (
                                                            <>
                                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                                Submitting...
                                                            </>
                                                        ) : (
                                                            'Submit Request'
                                                        )}
                                                    </button>
                                                </div>
                                            </form>
                                        </>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center text-center py-12"
                                        >
                                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                                <CheckCircle2 className="w-12 h-12 text-green-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Request Received!</h3>
                                            <p className="text-slate-600 max-w-xs">
                                                We&apos;ll review your request and activate your kitchen dashboard shortly. You&apos;ll receive an email once it&apos;s ready.
                                            </p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
}
