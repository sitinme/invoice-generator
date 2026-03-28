import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About InvoiceFly',
  description: 'Learn about InvoiceFly — our mission to provide free, professional invoicing tools for everyone.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">About InvoiceFly</h1>

        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            <strong className="text-gray-900">InvoiceFly</strong> is a free online invoice generator built for
            freelancers, small business owners, and entrepreneurs who need a fast, professional way to create
            invoices without the overhead of expensive software.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Our Mission</h2>
          <p>
            We believe that creating professional invoices should be free and accessible to everyone. Whether
            you&apos;re a one-person consultancy or a growing startup, you shouldn&apos;t have to pay for basic invoicing
            tools.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">How It Works</h2>
          <p>
            InvoiceFly runs entirely in your browser. Your data never leaves your device — we don&apos;t collect,
            store, or transmit any of your invoice information. Simply fill in your details, choose a
            template, and download your PDF.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Privacy First</h2>
          <p>
            We take your privacy seriously. All invoice data is stored locally in your browser using
            localStorage. No account creation is required, and no personal data is sent to any server.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Affiliate Partnerships</h2>
          <p>
            To keep InvoiceFly free, we may recommend third-party invoicing and accounting software. Some of
            these recommendations contain affiliate links, which means we may earn a small commission if you
            sign up through our links — at no extra cost to you. See our{' '}
            <a href="/disclaimer" className="text-[--color-primary] hover:underline">disclaimer</a> for full details.
          </p>
        </div>
      </div>
    </div>
  );
}
