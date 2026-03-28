import Link from 'next/link';
import affiliates from '@/data/affiliates.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Online Invoice Generator — Create & Download PDF Invoices',
  description:
    'Generate professional invoices for free. No sign-up, no watermarks. Download as PDF instantly. Perfect for freelancers and small businesses.',
};

const features = [
  {
    icon: '⚡',
    title: 'Instant PDF Download',
    desc: 'Generate and download polished PDF invoices in one click — no waiting, no email required.',
  },
  {
    icon: '🎨',
    title: 'Multiple Templates',
    desc: 'Choose from Classic, Modern, or Minimal designs to match your brand identity.',
  },
  {
    icon: '🔒',
    title: '100% Private',
    desc: 'All data stays in your browser. Nothing is stored on our servers — ever.',
  },
  {
    icon: '💰',
    title: 'Completely Free',
    desc: 'No hidden fees, no premium plans. Every feature is free for everyone.',
  },
  {
    icon: '📱',
    title: 'Mobile Friendly',
    desc: 'Create invoices on any device — desktop, tablet, or smartphone.',
  },
  {
    icon: '🌍',
    title: 'Multi-Currency',
    desc: 'Support for USD, EUR, GBP, JPY, and more — invoice clients worldwide.',
  },
];

const steps = [
  { num: '1', title: 'Fill In Details', desc: 'Enter your business and client information, add line items, and set payment terms.' },
  { num: '2', title: 'Preview & Customize', desc: 'Choose a template, upload your logo, and preview your invoice in real-time.' },
  { num: '3', title: 'Download PDF', desc: 'Click download and get a professional PDF invoice ready to send to your client.' },
];

const faqs = [
  {
    q: 'Is InvoiceFly really free?',
    a: 'Yes, 100% free. There are no hidden charges, premium tiers, or feature locks. You get full access to all invoice templates and features.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No. You can start creating invoices immediately without signing up. Your data is stored locally in your browser for convenience.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. All invoice data stays in your browser using localStorage. We never transmit or store any of your business information on our servers.',
  },
  {
    q: 'Can I add my company logo?',
    a: 'Yes! You can upload your logo directly in the invoice generator. It will appear on your PDF invoice.',
  },
  {
    q: 'What currencies are supported?',
    a: 'We support major currencies including USD, EUR, GBP, CAD, AUD, JPY, and CNY. Select your preferred currency in the invoice form.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Create Professional Invoices{' '}
            <span className="text-[--color-primary]">in Seconds</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Free online invoice generator — no sign-up, no watermarks.
            Fill in the details, pick a template, and download your PDF instantly.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/invoice-generator"
              className="inline-block bg-[--color-primary] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[--color-primary-dark] transition-colors shadow-lg shadow-blue-200"
            >
              Create Free Invoice →
            </Link>
            <Link
              href="/templates"
              className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-[--color-primary] hover:text-[--color-primary] transition-colors"
            >
              View Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            Why Choose InvoiceFly?
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Everything you need to create beautiful invoices — without the price tag.
          </p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            How It Works
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-16 h-16 mx-auto bg-[--color-primary] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {s.num}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-3 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Recommendations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            Need More Power? Try These Tools
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            If you need recurring invoices, payment tracking, or full accounting, these top-rated platforms have you covered.
          </p>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {affiliates.map((product) => (
              <div
                key={product.slug}
                className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="bg-blue-100 text-[--color-primary] text-sm font-semibold px-3 py-1 rounded-full">
                    ★ {product.rating}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <p className="text-[--color-primary] font-semibold mb-4">{product.price}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.slice(0, 3).map((f) => (
                    <span key={f} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href={`/go/${product.slug}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block bg-[--color-primary] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[--color-primary-dark] transition-colors text-sm"
                >
                  Try {product.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <svg
                    className="faq-icon w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
