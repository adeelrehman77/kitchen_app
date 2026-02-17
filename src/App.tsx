import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ChefHat,
  Calendar,
  CreditCard,
  Truck,
  MessageSquare,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Sparkles,
} from 'lucide-react';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CreateTenantDialog } from './components/CreateTenantDialog';
import SEO from './components/SEO';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';



export interface ServicePlan {
  id: number;
  name: string;
  tier: string;
  description: string;
  price_monthly: string;
  price_yearly: string;
  trial_days: number;
  max_menu_items: number;
  max_staff_users: number;
  max_customers: number;
  max_orders_per_month: number;
  has_inventory_management: boolean;
  has_delivery_tracking: boolean;
  has_customer_app: boolean;
  has_analytics: boolean;
  has_whatsapp_notifications: boolean;
  has_multi_branch: boolean;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Hero Section
function HeroSection({ onRegister }: { onRegister: () => void }) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Trusted by 100+ kitchens in UAE
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              Automate Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Tiffin & Meal Prep
              </span>{' '}
              Business.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Stop managing orders on WhatsApp. Get a dedicated Customer App,
              Auto-Invoicing, and Smart Menu Planning in minutes.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={onRegister}
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105"
              >
                Get Started for Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-indigo-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                See How It Works
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-1 shadow-2xl shadow-indigo-500/30">
              <div className="bg-slate-900 rounded-xl overflow-hidden">
                {/* Mock Browser Header */}
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-400 text-center">
                      kitchenapp.funadventure.ae/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard Preview */}
                <div className="p-6 bg-gradient-to-br from-slate-100 to-slate-50 min-h-[300px] sm:min-h-[400px]">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-xs text-slate-500 mb-1">Today's Orders</div>
                      <div className="text-2xl font-bold text-slate-900">247</div>
                      <div className="text-xs text-green-600">+12% from yesterday</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-xs text-slate-500 mb-1">Revenue</div>
                      <div className="text-2xl font-bold text-slate-900">AED 8,450</div>
                      <div className="text-xs text-green-600">+8% this week</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900 mb-3">Today's Menu</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">Veg Thali</span>
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">142 orders</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">Non-Veg Thali</span>
                        <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded">89 orders</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">Diet Meal</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">16 orders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Auto-Invoice Sent</div>
                  <div className="text-xs text-slate-500">Just now</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Pain Points Section
function PainPointsSection() {
  const painPoints = [
    {
      icon: MessageSquare,
      title: 'Chaos on WhatsApp',
      description:
        'Orders getting lost in endless chat threads. No way to track who ordered what, when, and for how long.',
      color: 'red',
    },
    {
      icon: CreditCard,
      title: 'Manual Billing Nightmares',
      description:
        'Spending hours creating invoices in Excel. Constantly chasing customers for overdue payments.',
      color: 'orange',
    },
    {
      icon: ChefHat,
      title: 'Kitchen Confusion',
      description:
        'Never knowing exactly how much to cook each day. Food waste from overproduction or unhappy customers from running out.',
      color: 'yellow',
    },
  ];

  const colorClasses: Record<string, string> = {
    red: 'bg-red-100 text-red-600',
    orange: 'bg-orange-100 text-orange-600',
    yellow: 'bg-amber-100 text-amber-600',
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Sound Familiar?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            If you're running a tiffin service or cloud kitchen, you've probably
            faced these problems every single day.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all group"
            >
              <div
                className={`w-14 h-14 rounded-xl ${colorClasses[point.color]} flex items-center justify-center mb-6`}
              >
                <point.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: 'Daily Rotating Menus',
      description:
        'Plan veg/non-veg menus for the whole month. Customers see the right menu for each day automatically.',
      badge: null,
    },
    {
      icon: Users,
      title: 'Subscription Management',
      description:
        'Handle pause, skip, and renewals automatically. Customers can manage their own subscriptions through the app.',
      badge: null,
    },
    {
      icon: FileText,
      title: 'Automated Invoicing',
      description:
        'Generate professional PDF invoices instantly. Track payments and send automated reminders.',
      badge: null,
    },
    {
      icon: Truck,
      title: 'Driver Routing',
      description:
        'Assign deliveries to drivers efficiently. Optimize routes to save time and fuel costs.',
      badge: 'Coming Soon',
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/10 text-indigo-200 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4" />
            Powerful Features
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Everything You Need to Run Your Kitchen
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-indigo-200 max-w-2xl mx-auto"
          >
            From menu planning to payment collection, we've got every aspect of
            your meal prep business covered.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/15 transition-all group"
            >
              {feature.badge && (
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                  {feature.badge}
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-indigo-200 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Social Proof Banner
function SocialProofSection() {
  return (
    <section
      id="testimonials"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-violet-600"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="w-6 h-6 text-indigo-200" />
          <span className="text-indigo-200 font-medium">Trusted Platform</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Trusted by Kitchens in Sharjah and Dubai
        </h3>
        <p className="text-indigo-100 text-lg">
          Join growing meal prep businesses that have automated their operations
          and scaled effortlessly.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-indigo-200 text-sm">Active Kitchens</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50,000+</div>
            <div className="text-indigo-200 text-sm">Meals Managed Daily</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="text-indigo-200 text-sm">Uptime</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Ecosystem Section
function EcosystemSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            A Complete Tech Ecosystem for Your Kitchen
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything connects seamlessly. One dashboard to rule them all,
            connected to powerful mobile apps for your customers and drivers.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-6 sm:p-8"
        >
          <img
            src="/assets/ecosystem.png"
            alt="Kitchen Ecosystem Flow"
            className="w-full max-h-[450px] object-contain mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

// Detailed Section Components for reuse
interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
  cta?: { text: string; link: string; type?: 'primary' | 'outline' };
}

function DetailSection({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  isReversed,
  cta
}: FeatureSectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={isReversed ? 'lg:order-2' : 'lg:order-1'}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            {cta && (
              <div className="flex gap-4">
                <button
                  className={cn(
                    "px-6 py-3 rounded-xl font-semibold transition-all",
                    cta.type === 'outline'
                      ? "border-2 border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600"
                      : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20"
                  )}
                >
                  {cta.text}
                </button>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={cn(
              "relative bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100",
              isReversed ? 'lg:order-1' : 'lg:order-2'
            )}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto drop-shadow-2xl rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const DEFAULT_PLANS: ServicePlan[] = [
  {
    id: -1,
    name: 'Starter',
    tier: 'free',
    description: 'Perfect for getting started with a small customer base.',
    price_monthly: '0.00',
    price_yearly: '0.00',
    trial_days: 15,
    max_customers: 50,
    max_menu_items: 20,
    max_staff_users: 2,
    max_orders_per_month: 500,
    has_inventory_management: false,
    has_delivery_tracking: false,
    has_customer_app: false,
    has_analytics: false,
    has_whatsapp_notifications: false,
    has_multi_branch: false,
  },
  {
    id: -2,
    name: 'Pro',
    tier: 'pro',
    description: 'For established kitchens ready to scale their operations.',
    price_monthly: '499.00',
    price_yearly: '4990.00',
    trial_days: 14,
    max_customers: 0,
    max_menu_items: 0,
    max_staff_users: 10,
    max_orders_per_month: 0,
    has_inventory_management: true,
    has_delivery_tracking: true,
    has_customer_app: true,
    has_analytics: true,
    has_whatsapp_notifications: true,
    has_multi_branch: false,
  }
];

// Pricing Section
function PricingSection({ onRegister, plans, isLoading }: { onRegister: () => void; plans: ServicePlan[]; isLoading: boolean }) {
  const displayPlans = plans.length > 0 ? plans : DEFAULT_PLANS;

  const getPlanFeatures = (plan: ServicePlan) => {
    const list: string[] = [];

    // Usage limits
    if (plan.max_customers === 0) list.push('Unlimited customers');
    else if (plan.max_customers > 0) list.push(`Up to ${plan.max_customers.toLocaleString()} customers`);

    // Feature flags
    if (plan.has_whatsapp_notifications) list.push('WhatsApp automation');
    if (plan.has_customer_app) list.push('Dedicated Customer App');
    if (plan.has_inventory_management) list.push('Inventory management');
    if (plan.has_delivery_tracking) list.push('Delivery tracking');
    if (plan.has_analytics) list.push('Advanced analytics');
    if (plan.has_multi_branch) list.push('Multi-branch support');

    // Fallback if no specific features enabled
    if (list.length < 3) {
      if (plan.max_menu_items > 0) list.push(`${plan.max_menu_items} menu items`);
      else if (plan.max_menu_items === 0) list.push('Unlimited menu items');

      if (plan.max_staff_users > 0) list.push(`${plan.max_staff_users} staff users`);
    }

    if (plan.trial_days > 0) list.push(`${plan.trial_days}-day free trial`);

    return list;
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-lg text-slate-600 max-w-2xl mx-auto transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
          >
            {isLoading ? 'Updating latest plans...' : 'Start free and upgrade as you grow. No hidden fees, no surprises.'}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {displayPlans.map((plan) => {
            const isPopular = plan.tier === 'pro' || plan.tier === 'professional' || plan.name.toLowerCase().includes('pro');
            const features = getPlanFeatures(plan);

            return (
              <motion.div
                key={plan.id}
                variants={fadeInUp}
                className={`relative p-8 rounded-2xl flex flex-col transition-all duration-300 ${isPopular
                  ? 'bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-2xl shadow-indigo-500/30 lg:scale-105 z-10'
                  : 'bg-white border border-slate-200 shadow-xl shadow-slate-200/50'
                  }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-sm font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-slate-900'}`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-slate-900'}`}
                    >
                      {parseFloat(plan.price_monthly) === 0 ? 'Free' : `AED ${parseFloat(plan.price_monthly).toLocaleString()}`}
                    </span>
                    {parseFloat(plan.price_monthly) > 0 && (
                      <span
                        className={isPopular ? 'text-indigo-200' : 'text-slate-500'}
                      >
                        /mo
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${isPopular ? 'text-indigo-100' : 'text-slate-600'}`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isPopular ? 'text-indigo-300' : 'text-indigo-600'}`}
                      />
                      <span
                        className={`text-sm ${isPopular ? 'text-white' : 'text-slate-700'}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onRegister}
                  className={`block w-full py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 ${isPopular
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg hover:scale-[1.02]'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 hover:scale-[1.02]'
                    }`}
                >
                  {parseFloat(plan.price_monthly) === 0 ? 'Start Free' : 'Get Started'}
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Dynamic Section Components

interface LandingPageProps {
  seoProps?: any;
  plans: ServicePlan[];
  isLoadingPlans: boolean;
  onRegister: () => void;
  isRegistrationOpen: boolean;
  setIsRegistrationOpen: (open: boolean) => void;
}

const LandingPageContent = ({
  plans,
  isLoadingPlans,
  onRegister,
}: {
  plans: ServicePlan[];
  isLoadingPlans: boolean;
  onRegister: () => void;
}) => (
  <>
    <HeroSection onRegister={onRegister} />
    <EcosystemSection />
    <DetailSection
      title="Powerful Business Dashboard"
      description="The central hub for managing everything from orders to delivery. Get real-time insights into your kitchen's performance."
      features={[
        "CRM - Leads & Trials",
        "Subscription & Order Fulfilment",
        "Custom delivery rules",
        "Business Analytics & Reports",
        "Marketing Engagement",
        "3rd party Integrations"
      ]}
      imageSrc="/assets/business-dashboard.png"
      imageAlt="Business Dashboard Interface"
      cta={{ text: "Book a Demo", link: "#", type: "primary" }}
    />
    <DetailSection
      title="The Customer App"
      description="A user-friendly mobile app for your customers to manage their subscriptions, skip meals, and track deliveries in real-time."
      features={[
        "Clean Modern Design",
        "Easy Subscription Setup",
        "Flexible Scheduling",
        "Order Calendar",
        "Multiple Payment Options",
        "Referral Program"
      ]}
      imageSrc="/assets/customer-app.png"
      imageAlt="Customer Mobile App"
      isReversed
      cta={{ text: "Learn More", link: "#", type: "outline" }}
    />
    <DetailSection
      title="The Driver's Field App"
      description="Efficiently manage last-mile deliveries. Drivers get optimized routes and customers get real-time tracking updates."
      features={[
        "Route Optimization",
        "Real-Time Order Updates",
        "Multi-lingual Support",
        "Offline Mode Support",
        "Proof of Delivery",
        "Cash Collection Summary"
      ]}
      imageSrc="/assets/driver-app.png"
      imageAlt="Driver Field App"
      cta={{ text: "Talk to Us!", link: "#", type: "primary" }}
    />
    <PainPointsSection />
    <FeaturesSection />
    <SocialProofSection />
    <PricingSection onRegister={onRegister} plans={plans} isLoading={isLoadingPlans} />
  </>
);


// Main App Component
export default function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [plans, setPlans] = useState<ServicePlan[]>([]);
  const [isLoadingPlans, setIsLoadingPlans] = useState(false);

  useEffect(() => {
    const fetchPlans = async () => {
      setIsLoadingPlans(true);
      try {
        const base = import.meta.env?.VITE_API_URL || process.env.NEXT_PUBLIC_API_URL || 'https://api-kitchen.funadventure.ae';
        const url = `${base.replace(/\/$/, '')}/api/organizations/plans/`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          const plansList = Array.isArray(data) ? data : (data.results && Array.isArray(data.results) ? data.results : []);
          setPlans(plansList);
        }
      } catch (err) {
        console.error('Failed to fetch plans:', err);
      } finally {
        setIsLoadingPlans(false);
      }
    };
    fetchPlans();
  }, []);

  const openRegistration = () => setIsRegistrationOpen(true);

  const landingPageProps = {
    plans,
    isLoadingPlans,
    onRegister: openRegistration,
    isRegistrationOpen,
    setIsRegistrationOpen
  };

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar onRegister={openRegistration} />

        <main className="flex-grow scroll-smooth">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SEO />
                  <LandingPageContent {...landingPageProps} onRegister={openRegistration} />
                </>
              }
            />
            <Route
              path="/features"
              element={
                <>
                  <SEO
                    title="Kitchen Automation Features | UAE SaaS Platform"
                    description="Streamline your UAE food business with automated order management, sales insights, and supply chain tracking in one B2B SaaS dashboard. Start today."
                  />
                  <LandingPageContent {...landingPageProps} onRegister={openRegistration} />
                </>
              }
            />
            <Route
              path="/pricing"
              element={
                <>
                  <SEO
                    title="Transparent SaaS Pricing | Kitchen Software UAE"
                    description="Flexible tiered and usage-based pricing for UAE cloud kitchens. Scale your food brand with no hidden costs and 100% space utilization. See our plans."
                  />
                  <LandingPageContent {...landingPageProps} onRegister={openRegistration} />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <SEO />
                  <LandingPageContent {...landingPageProps} onRegister={openRegistration} />
                </>
              }
            />
            <Route path="/privacy" element={<PrivacyPolicy onRegister={openRegistration} />} />
            <Route path="/terms" element={<TermsOfService onRegister={openRegistration} />} />
          </Routes>
        </main>

        <Footer />

        <CreateTenantDialog
          open={isRegistrationOpen}
          onOpenChange={setIsRegistrationOpen}
        />
      </div>
    </Router>
  );
}



