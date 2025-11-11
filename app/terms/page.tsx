import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - WebLeads',
  description: 'Terms of Service for WebLeads lead generation platform. Learn about our subscription service, data usage policies, and service availability.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
          <p className="text-text-secondary mb-8">Last updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Agreement to Terms</h2>
            <p className="text-text-primary mb-4">
              By accessing and using WebLeads ("Service"), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Credit-Based Subscription Service</h2>
            <p className="text-text-primary mb-4">
              WebLeads is a credit-based subscription service for lead generation. By subscribing, you agree to pay the specified fees for the selected plan on a recurring basis.
            </p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>1 credit = 1 Place (Business/Lead) - credits are consumed when searches complete</li>
              <li>Subscription plans include monthly credit allocations: Free (1,000), Starter (6,000), Growth (15,000), or Scale (45,000)</li>
              <li>Credits reset monthly and do not roll over to the next billing period</li>
              <li>Additional credits can be purchased as one-time top-up packs</li>
              <li>Subscription fees are charged in advance on a monthly basis</li>
              <li>We reserve the right to modify pricing with 30 days notice</li>
              <li>Cancellation takes effect at the end of the current billing period</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">3. No Refunds Policy</h2>
            <p className="text-text-primary mb-4">
              All payments made to WebLeads are final and non-refundable. This includes:
            </p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Monthly subscription fees</li>
              <li>One-time credit top-up purchases</li>
              <li>Unused credits at the time of cancellation</li>
              <li>Credits consumed for completed searches</li>
            </ul>
            <p className="text-text-primary mb-4">
              We encourage you to start with our Free plan (1,000 credits) to test the service before upgrading to a paid subscription.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Service Availability and Third-Party Dependencies</h2>
            <p className="text-text-primary mb-4">
              While we strive to provide continuous and reliable service, WebLeads depends on various third-party services and APIs for data collection and processing. You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Service outages may occur due to changes in third-party services such as Google Maps, social media platforms, business directories, and other data sources</li>
              <li>We may need to temporarily suspend or modify our service to adapt to changes in third-party APIs, terms of service, or technical requirements</li>
              <li>We are not liable for service interruptions caused by third-party providers beyond our control</li>
              <li>We will make reasonable efforts to notify users of planned maintenance or significant service changes</li>
              <li>No service level agreements (SLAs) are guaranteed due to the dependency on external data sources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Acceptable Use</h2>
            <p className="text-text-primary mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Use the service for any unlawful purposes or to solicit unlawful activities</li>
              <li>Violate any local, state, national, or international law or regulation</li>
              <li>Transmit or send unsolicited commercial communications (spam)</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Use automated tools to extract data beyond your subscription limits</li>
              <li>Resell or redistribute our data without explicit written permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Data Usage and Privacy</h2>
            <p className="text-text-primary mb-4">
              Our data collection and processing practices are governed by our Privacy Policy. By using WebLeads, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>We collect business information from publicly available sources</li>
              <li>You are responsible for compliance with applicable data protection laws (GDPR, CCPA, etc.) when using our data</li>
              <li>You must respect opt-out requests and maintain proper consent records</li>
              <li>We are not responsible for the accuracy or completeness of third-party data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Intellectual Property</h2>
            <p className="text-text-primary mb-4">
              The service and its original content, features, and functionality are and will remain the exclusive property of WebLeads and its licensors. The service is protected by copyright, trademark, and other laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Limitation of Liability</h2>
            <p className="text-text-primary mb-4">
              In no event shall WebLeads, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">9. Termination</h2>
            <p className="text-text-primary mb-4">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">10. Governing Law</h2>
            <p className="text-text-primary mb-4">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which WebLeads operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">11. Changes to Terms</h2>
            <p className="text-text-primary mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">12. Contact Information</h2>
            <p className="text-text-primary mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-text-primary mb-4">
              Email: <a href="mailto:aleksander@webleads.site" className="text-brand-primary hover:underline">aleksander@webleads.site</a>
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-primary hover:text-primary-hover transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 