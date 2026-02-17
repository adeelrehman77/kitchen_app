import { Link } from 'react-router-dom';


export function Footer() {
    return (
        <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/assets/logo.png"
                            alt="Fun Adventure Kitchen Logo"
                            className="w-8 h-8 object-contain"
                        />
                        <span className="text-lg font-bold text-white">
                            Fun Adventure Kitchen
                        </span>
                    </Link>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link
                            to="/privacy"
                            className="text-slate-400 hover:text-white transition-colors text-sm"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/terms"
                            className="text-slate-400 hover:text-white transition-colors text-sm"
                        >
                            Terms of Service
                        </Link>
                        <a
                            href="mailto:support@funadventure.ae"
                            className="text-slate-400 hover:text-white transition-colors text-sm"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-slate-500 text-sm">
                        &copy; 2026 Fun Adventure. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
