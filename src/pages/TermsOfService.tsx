import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export default function TermsOfService({ onRegister }: { onRegister: () => void }) {
    return (
        <LegalLayout
            title="Terms of Service"
            onRegister={onRegister}
            seoProps={{
                title: "Terms of Service | Fun Adventure Kitchen",
                description: "Terms and conditions for using Fun Adventure Kitchen's UAE-wide SaaS platform and food management services."
            }}
        >
            <section className="space-y-6">
                <p><strong>Last Updated: February 17, 2026</strong></p>

                <h2 className="text-xl font-bold mt-8">1. Agreement to Terms</h2>
                <p>By accessing or using Fun Adventure Kitchen, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

                <h2 className="text-xl font-bold mt-8">2. Use of Service</h2>
                <p>Our platform is provided as a SaaS solution for kitchen and meal prep business management. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.</p>

                <h2 className="text-xl font-bold mt-8">3. Subscriptions and Payments</h2>
                <p>Access to certain features requires a paid subscription. All fees are non-refundable except as required by law. We reserve the right to change our pricing upon notice.</p>

                <h2 className="text-xl font-bold mt-8">4. Prohibited Content</h2>
                <p>You may not use the platform for any illegal activities or to upload harmful content. We reserve the right to terminate accounts that violate these terms.</p>

                <h2 className="text-xl font-bold mt-8">5. Limitation of Liability</h2>
                <p>Fun Adventure Kitchen shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our platform.</p>

                <h2 className="text-xl font-bold mt-8">6. Governing Law</h2>
                <p>These terms are governed by the laws of the United Arab Emirates as applicable in each Emirate.</p>
            </section>
        </LegalLayout>
    );
}
