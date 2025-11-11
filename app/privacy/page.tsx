import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - WebLeads',
  description: 'Privacy Policy for WebLeads lead generation platform. Learn about our data collection, processing practices, and your privacy rights.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          <p className="text-text-secondary mb-8">Last updated: January 2025</p>

          <p className="text-text-primary mb-8">
            WebLeads ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our lead generation services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Information We Collect</h2>
            <h3 className="text-xl font-medium text-text-primary mb-3">Personal Information</h3>
            <p className="text-text-primary mb-4">When you use our services, we may collect:</p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Name and email address (for account creation and communication)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Contact preferences and subscription settings</li>
              <li>Communication history with our support team</li>
            </ul>
            
            <h3 className="text-xl font-medium text-text-primary mb-3">Business Data</h3>
            <p className="text-text-primary mb-4">We collect business information from publicly available sources, including:</p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Business names, addresses, and phone numbers from Google Maps</li>
              <li>Email addresses extracted from company websites using deep website crawling (Playwright)</li>
              <li>Decision-maker data including roles and names from company websites</li>
              <li>Google Maps ratings, reviews, and business hours</li>
              <li>Social media profile links (LinkedIn, Facebook, Instagram, Twitter/X)</li>
              <li>Website URLs and basic company information</li>
              <li>Other publicly available business data from government and regulatory databases</li>
            </ul>

            <h3 className="text-xl font-medium text-text-primary mb-3">Technical Information</h3>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>IP address and browser information</li>
              <li>Usage data and analytics</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">2. How We Use Your Information</h2>
            <p className="text-text-primary mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Provide real-time Google Maps searches and business data extraction</li>
              <li>Enrich business data with emails and decision-maker information from company websites</li>
              <li>Process payments and manage your credit-based subscription (via Stripe)</li>
              <li>Track credit consumption and manage your monthly credit allocations</li>
              <li>Queue and process multiple searches for Growth and Scale plan users</li>
              <li>Deliver search results and allow CSV/XLS export of unlocked data</li>
              <li>Communicate with you about your account, searches, and our services</li>
              <li>Improve our services and develop new features (like email verification)</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Data Sources and Third-Party Services</h2>
            <p className="text-text-primary mb-4">
              Our lead generation service relies on various third-party sources and services:
            </p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Google Maps and business directory platforms for real-time business searches</li>
              <li>Company websites (publicly accessible pages including contact, about, and team pages)</li>
              <li>Social media platforms (public business profile links)</li>
              <li>Third-party payment processors for secure payment handling</li>
              <li>Government and regulatory databases (publicly available business information)</li>
              <li>Email verification services (coming soon)</li>
            </ul>
            <p className="text-text-primary mb-4">
              All data we collect comes from publicly available sources. We do not access private or password-protected information. Changes to third-party terms or availability may affect our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-text-primary mb-4">We do not sell your personal information. We may share information in the following circumstances:</p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li><strong>Service Providers</strong>: With trusted third parties who help us operate our business (payment processors, hosting providers, analytics services)</li>
              <li><strong>Legal Requirements</strong>: When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers</strong>: In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent</strong>: When you have given us explicit consent to share your information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Data Security</h2>
            <p className="text-text-primary mb-4">
              We implement appropriate technical and organizational measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure payment processing through certified providers</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and employee training</li>
            </ul>
            <p className="text-text-primary mb-4">
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Your Privacy Rights</h2>
            <p className="text-text-primary mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li><strong>Access</strong>: Request access to your personal information</li>
              <li><strong>Correction</strong>: Request correction of inaccurate information</li>
              <li><strong>Deletion</strong>: Request deletion of your personal information</li>
              <li><strong>Portability</strong>: Request a copy of your data in a structured format</li>
              <li><strong>Opt-out</strong>: Unsubscribe from marketing communications</li>
              <li><strong>Restriction</strong>: Request limitation of processing in certain circumstances</li>
            </ul>
            <p className="text-text-primary mb-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Cookies and Tracking</h2>
            <p className="text-text-primary mb-4">
              We use cookies and similar technologies to improve your experience on our website. These may include:
            </p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand how you use our site</li>
              <li>Marketing cookies for personalized content (with your consent)</li>
            </ul>
            <p className="text-text-primary mb-4">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Data Retention</h2>
            <p className="text-text-primary mb-4">
              We retain your information for as long as necessary to provide our services and comply with legal obligations. Generally:
            </p>
            <ul className="list-disc pl-6 text-text-primary mb-4">
              <li>Account information: Retained until account deletion or 30 days after cancellation</li>
              <li>Payment information: Processed through Stripe and retained as required for tax and legal purposes</li>
              <li>Credit history: Retained for billing purposes (monthly credit allocations and consumption)</li>
              <li>Search results: Cached temporarily for active searches, then unlocked based on available credits</li>
              <li>Lead data: Real-time extraction, not stored long-term - fresh data on every search</li>
              <li>Usage data: Typically retained for 24 months for analytics and service improvement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">9. International Data Transfers</h2>
            <p className="text-text-primary mb-4">
              Your information may be processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">10. Children's Privacy</h2>
            <p className="text-text-primary mb-4">
              Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children under 16.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-text-primary mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">12. Contact Us</h2>
            <p className="text-text-primary mb-4">
              If you have any questions about this Privacy Policy or want to exercise your privacy rights, please contact us at:
            </p>
            <p className="text-text-primary mb-4">
              Email: <a href="mailto:aleksander@webleads.site" className="text-brand-primary hover:underline">aleksander@webleads.site</a>
            </p>
            <p className="text-text-primary mb-4">
              We will respond to your inquiry within 30 days.
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