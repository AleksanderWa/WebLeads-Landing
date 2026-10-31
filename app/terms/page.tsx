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
          <p className="text-text-secondary mb-8">Last updated: October 31, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Agreement to Terms</h2>
            <p className="text-text-primary mb-4">
              By accessing and using WebLeads ("Service"), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Subscription Service</h2>
            <p className="text-text-primary mb-4">
              WebLeads is a subscription service for lead generation. By subscribing, you agree to pay the specified fees for the selected plan on a recurring basis.
            </p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Each plan includes fixed daily search quotas and monthly quotas for people enrichments and email verifications</li>
              <li>Plans: Starter ($24/mo), Growth ($69/mo), and Scale ($199/mo). Starter and Growth start with a paid 5-day trial (see Section 3). Scale has no trial</li>
              <li>Monthly quotas reset on your billing date and do not roll over</li>
              <li>Each plan includes fixed monthly quotas for searches, people enrichments, and email verifications; no add-ons or top-ups available</li>
              <li>Subscription fees are charged in advance on a monthly basis</li>
              <li>We reserve the right to modify pricing with 30 days notice</li>
              <li>Cancellation takes effect at the end of the current billing period</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Trial</h2>
            <p className="text-text-primary mb-4">
              New subscriptions to Starter and Growth start with a paid 5-day trial. A valid payment method is required to start the trial. Scale does not include a trial and is billed at its regular monthly rate from the start. There is no free plan available for new signups.
            </p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>The trial has a one-time trial fee, charged to your payment method when you start the trial: $4.99 for Starter and $9.99 for Growth</li>
              <li>During the trial, you have access to your selected plan's search, people enrichment, and email verification limits</li>
              <li>The trial fee is separate from the plan's monthly price and is not credited against it. If you do not cancel before the end of the 5-day trial period, your subscription automatically renews as a paid subscription and your payment method is charged the plan's regular monthly rate ($24 for Starter, $69 for Growth) on day 6, and monthly thereafter until you cancel</li>
              <li>You may cancel at any time during the trial from your account settings to avoid being charged the plan's monthly rate. Cancellation stops renewal, and the plan's monthly rate is charged only if the subscription is still active when the 5-day trial ends. The trial fee is refunded on request (see Section 4)</li>
              <li>We send a reminder email before your trial ends</li>
              <li>The trial is limited to one per customer. We may decline, end, or convert a trial to a paid subscription immediately if we determine, in our sole discretion, that an account, payment method, or person has already received a trial, whether under this account or another</li>
            </ul>
            <p className="text-text-primary mb-4">
              Some accounts created before the trial was introduced remain on a limited legacy plan called Discover. Discover is not available to new signups. We may occasionally offer promotional trials on different terms, which will be described when offered.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Refunds</h2>
            <p className="text-text-primary mb-4">
              The one-time trial fee ($4.99 for Starter, $9.99 for Growth) is refunded on request. To request a refund, contact us at the email address in Section 14. Except for the trial fee, all payments made to WebLeads are final and non-refundable. This includes:
            </p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Monthly subscription fees, including the charge applied when a trial converts to a paid subscription</li>
              <li>Unused monthly quota at the time of cancellation</li>
              <li>Quota consumed for completed searches or enrichments</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Service Availability and Third-Party Dependencies</h2>
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
            <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Acceptable Use</h2>
            <p className="text-text-primary mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Use the service for any unlawful purposes or to solicit unlawful activities</li>
              <li>Violate any local, state, national, or international law or regulation</li>
              <li>Transmit or send unsolicited commercial communications (spam)</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Use automated tools to extract data beyond your subscription limits</li>
              <li>Resell or redistribute our data without explicit written permission</li>
              <li>Create multiple accounts, or use another person's information, to obtain more than one trial</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Marketing Communications</h2>
            <p className="text-text-primary mb-4">
              By creating an account or subscribing to WebLeads, you agree to receive marketing communications from us, including:
            </p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Product updates and new feature announcements</li>
              <li>Service launch dates and availability notifications</li>
              <li>Promotional offers and special pricing</li>
              <li>Newsletters and educational content related to lead generation</li>
              <li>Company updates and industry insights</li>
            </ul>
            <p className="text-text-primary mb-4">
              You can opt-out of marketing communications at any time by using the unsubscribe link in our emails or by contacting our support team. Please note that even if you opt-out of marketing emails, you will still receive essential service-related communications such as account notifications, billing information, and important service updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Data Usage and Privacy</h2>
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
            <h2 className="text-2xl font-semibold text-text-primary mb-4">9. Intellectual Property</h2>
            <p className="text-text-primary mb-4">
              The service and its original content, features, and functionality are and will remain the exclusive property of WebLeads and its licensors. The service is protected by copyright, trademark, and other laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">10. Limitation of Liability</h2>
            <p className="text-text-primary mb-4">
              In no event shall WebLeads, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">11. Termination</h2>
            <p className="text-text-primary mb-4">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">12. Governing Law</h2>
            <p className="text-text-primary mb-4">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which WebLeads operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">13. Changes to Terms</h2>
            <p className="text-text-primary mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">14. Contact Information</h2>
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