import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoice & Freelancing Blog — Tips, Guides & Best Practices | InvoiceFly',
  description:
    'Expert guides on invoicing, freelancing, and small business finance. Learn how to create invoices, avoid common mistakes, and get paid faster.',
  keywords: ['invoice tips', 'freelancing guide', 'invoicing blog', 'small business invoicing'],
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            InvoiceFly <span className="text-[#2563eb]">Blog</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Expert guides, tips, and best practices for invoicing, freelancing, and small business finance.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-blue-200 transition-all group"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">{post.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.keywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="bg-blue-50 text-[#2563eb] text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Ready to Create Your Invoice?
          </h2>
          <p className="mt-3 text-gray-600">
            Try our free invoice generator — no sign-up required.
          </p>
          <Link
            href="/invoice-generator"
            className="mt-6 inline-block bg-[#2563eb] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Create Free Invoice →
          </Link>
        </div>
      </section>
    </>
  );
}
