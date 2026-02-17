import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import SEO from './SEO';

interface LegalLayoutProps {
    children: ReactNode;
    title: string;
    seoProps?: any;
    onRegister: () => void;
}

export const LegalLayout = ({ children, title, seoProps, onRegister }: LegalLayoutProps) => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <SEO {...seoProps} />
            <Navbar onRegister={onRegister} />

            <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-6">
                        {title}
                    </h1>
                    <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
                        {children}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
