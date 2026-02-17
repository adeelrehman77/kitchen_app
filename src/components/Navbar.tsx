import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    onRegister: () => void;
}

export function Navbar({ onRegister }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Smooth scroll for hash links
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
        const isHash = to.startsWith('/#');
        const isActive = location.pathname + location.hash === to || (to === '/#features' && location.pathname === '/features');

        if (isHash && location.pathname === '/') {
            return (
                <a
                    href={to.replace('/', '')}
                    className={`transition-all duration-300 font-medium hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-600'
                        }`}
                >
                    {children}
                </a>
            );
        }

        return (
            <Link
                to={to}
                className={`transition-all duration-300 font-medium hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-600'
                    }`}
                onClick={() => setIsOpen(false)}
            >
                {children}
            </Link>
        );
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/assets/logo.png"
                            alt="Fun Adventure Kitchen Logo"
                            className="w-10 h-10 object-contain"
                        />
                        <span className="text-xl font-bold text-slate-900">
                            Fun Adventure Kitchen
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink to="/#features">Features</NavLink>
                        <NavLink to="/#pricing">Pricing</NavLink>
                        <NavLink to="/#testimonials">Testimonials</NavLink>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://kitchenapp.funadventure.ae"
                            className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
                        >
                            Login
                        </a>
                        <button
                            onClick={onRegister}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                        >
                            Start Free Trial
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-slate-600" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-600" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white border-b border-slate-200 px-4 py-4"
                >
                    <div className="flex flex-col gap-4">
                        <NavLink to="/#features">Features</NavLink>
                        <NavLink to="/#pricing">Pricing</NavLink>
                        <NavLink to="/#testimonials">Testimonials</NavLink>
                        <a
                            href="https://kitchenapp.funadventure.ae"
                            className="text-slate-600 font-medium py-2"
                        >
                            Login
                        </a>
                        <button
                            onClick={() => {
                                onRegister();
                                setIsOpen(false);
                            }}
                            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold text-center"
                        >
                            Start Free Trial
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
