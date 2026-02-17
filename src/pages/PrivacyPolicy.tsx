import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export default function PrivacyPolicy({ onRegister }: { onRegister: () => void }) {
    return (
        <LegalLayout
            title="Privacy Policy"
            onRegister={onRegister}
            seoProps={{
                title: "Privacy Policy | Fun Adventure Kitchen",
                description: "Privacy policy for Fun Adventure Kitchen. Learn how we handle and protect your data in compliance with UAE-wide regulations."
            }}
        >
            <section className="space-y-6">
                <p><strong>Last Updated: February 17, 2026</strong></p>

                <h2 className="text-xl font-bold mt-8">1. Introduction</h2>
                <p>Fun Adventure Kitchen ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website kitchen.funadventure.ae and use our SaaS platform.</p>

                <h2 className="text-xl font-bold mt-8">2. Information Collection</h2>
                <p>We collect information that you provide directly to us, such as when you create an account, subscribe to a plan, or contact support. This may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information</li>
                    <li>Business details and kitchen information</li>
                    <li>Payment information processing through secure channels</li>
                    <li>Customer data uploaded to the platform</li>
                </ul>

                <h2 className="text-xl font-bold mt-8">3. Use of Information</h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Analyze usage patterns and optimize platform performance</li>
                </ul>

                <h2 className="text-xl font-bold mt-8">4. Data Protection (UAE Compliance)</h2>
                <p>In accordance with UAE-wide data protection regulations, we implement robust security measures to protect your personal and business data. We do not sell your personal data to third parties.</p>

                <h2 className="text-xl font-bold mt-8">5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at support@funadventure.ae.</p>
            </section>
        </LegalLayout>
    );
}
