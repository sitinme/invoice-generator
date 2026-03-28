import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoice Templates — Classic, Modern & Minimal Designs',
  description:
    'Choose from three professional invoice templates. Classic, Modern, and Minimal designs — all free to use.',
};

const templates = [
  {
    id: 'classic',
    name: 'Classic',
    description:
      'A timeless design with a blue header and clean layout. Perfect for professional services, consulting, and traditional businesses.',
    color: '#2563eb',
    features: ['Blue header with branding', 'Clear line item table', 'Professional typography', 'Notes section'],
  },
  {
    id: 'modern',
    name: 'Modern',
    description:
      'Sleek dark header with contemporary styling. Ideal for tech companies, agencies, and creative professionals.',
    color: '#0f172a',
    features: ['Dark header design', 'Modern aesthetics', 'Clean data layout', 'Subtle accents'],
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description:
      'A stripped-down, content-focused design with a light border header. Great for freelancers and consultants who prefer simplicity.',
    color: '#374151',
    features: ['Clean white design', 'Light border header', 'Focused on content', 'Maximum readability'],
  },
];

export default function TemplatesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Invoice Templates</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a template that fits your brand. All templates are free and fully customizable.
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Preview area */}
              <div className="h-56 relative" style={{ backgroundColor: t.color + '08' }}>
                <div className="absolute inset-4 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                  <div className="h-8 rounded" style={{ backgroundColor: t.id === 'minimal' ? '#ffffff' : t.color, border: t.id === 'minimal' ? '2px solid #e5e7eb' : 'none' }}>
                    <div className="flex items-center justify-between px-3 h-full">
                      <div className="w-16 h-3 rounded bg-white/30" />
                      <div className="w-12 h-3 rounded bg-white/30" />
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between">
                    <div className="space-y-1">
                      <div className="w-20 h-2 bg-gray-200 rounded" />
                      <div className="w-14 h-2 bg-gray-100 rounded" />
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="w-16 h-2 bg-gray-200 rounded ml-auto" />
                      <div className="w-12 h-2 bg-gray-100 rounded ml-auto" />
                    </div>
                  </div>
                  <div className="mt-3 h-2 rounded" style={{ backgroundColor: t.color + '15' }} />
                  <div className="mt-1.5 space-y-1">
                    <div className="h-1.5 bg-gray-100 rounded" />
                    <div className="h-1.5 bg-gray-100 rounded" />
                    <div className="h-1.5 bg-gray-100 rounded" />
                  </div>
                  <div className="mt-3 flex justify-end">
                    <div className="w-20 h-3 rounded" style={{ backgroundColor: t.color + '20' }} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{t.description}</p>
                <ul className="mt-4 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/invoice-generator?template=${t.id}`}
                  className="mt-6 block text-center bg-[--color-primary] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[--color-primary-dark] transition-colors"
                >
                  Use {t.name} Template
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
