import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'InvoiceFly privacy policy — how we handle your data.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            Your privacy is important to us. This Privacy Policy explains how InvoiceFly collects, uses, and
            protects your information when you use our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Information We Collect</h2>
          <p>
            <strong className="text-gray-900">Invoice Data:</strong> All invoice information you enter
            (business details, client information, line items) is stored locally in your browser using
            localStorage. This data never leaves your device and is not transmitted to our servers.
          </p>
          <p>
            <strong className="text-gray-900">Analytics:</strong> We use Google Analytics to collect
            anonymized usage data such as page views, traffic sources, and browser type. This helps us
            understand how our website is used and how to improve it. No personally identifiable information
            is collected through analytics.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Cookies</h2>
          <p>
            We use cookies only for analytics purposes (Google Analytics). These cookies do not contain
            personal information. You can disable cookies in your browser settings at any time.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Third-Party Links</h2>
          <p>
            Our website contains links to third-party websites (affiliate partners). We are not responsible
            for the privacy practices or content of these external sites. We encourage you to read the
            privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Data Security</h2>
          <p>
            Since all invoice data is stored locally in your browser, you have full control over your data.
            You can clear your data at any time by clearing your browser&apos;s localStorage or using the
            &quot;Reset&quot; button in our invoice generator.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Children&apos;s Privacy</h2>
          <p>
            Our service is not directed to individuals under the age of 13. We do not knowingly collect
            personal information from children.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page
            with an updated revision date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our website.
          </p>

          <p className="text-sm text-gray-500 mt-10">Last updated: March 2025</p>
        </div>
      </div>
    </div>
  );
}
