import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer & Affiliate Disclosure',
  description: 'FTC-compliant affiliate disclosure and disclaimer for InvoiceFly.',
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Disclaimer &amp; Affiliate Disclosure</h1>

        <div className="prose prose-lg text-gray-600 space-y-6">
          <p className="bg-blue-50 border-l-4 border-[--color-primary] p-4 rounded-r-lg text-sm">
            <strong className="text-gray-900">FTC Disclosure:</strong> Some of the links on this website are
            affiliate links. This means that if you click on a link and make a purchase, we may receive a
            commission at no additional cost to you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Affiliate Relationships</h2>
          <p>
            InvoiceFly participates in affiliate programs with various invoicing and accounting software
            providers, including but not limited to FreshBooks, QuickBooks, Zoho Invoice, and Wave. We may
            earn referral fees when you sign up for their services through links on our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Editorial Integrity</h2>
          <p>
            Our recommendations are based on genuine evaluation. Affiliate relationships do not influence our
            editorial content, ratings, or reviews. We only recommend products we believe provide real value
            to our users.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">No Professional Advice</h2>
          <p>
            The information provided on InvoiceFly is for general informational purposes only. It does not
            constitute professional financial, legal, or accounting advice. Always consult with a qualified
            professional for specific business or financial questions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Accuracy of Information</h2>
          <p>
            While we strive to provide accurate and up-to-date information, we make no warranties or
            representations about the completeness, accuracy, or reliability of the content on this website.
            Product pricing, features, and availability may change without notice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Limitation of Liability</h2>
          <p>
            InvoiceFly shall not be held liable for any damages arising from the use of our invoice
            generator tool or the information provided on this website. Use our tools and follow our
            recommendations at your own risk.
          </p>

          <p className="text-sm text-gray-500 mt-10">Last updated: March 2025</p>
        </div>
      </div>
    </div>
  );
}
