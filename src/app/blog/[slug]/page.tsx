import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';
import affiliates from '@/data/affiliates.json';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | InvoiceFly Blog`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'InvoiceFly' },
    publisher: { '@type': 'Organization', name: 'InvoiceFly' },
    keywords: post.keywords.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <Link href="/blog" className="text-[--color-primary] hover:underline text-sm mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
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
        </div>

        {/* Content */}
        <div
          className="prose prose-lg prose-blue max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-[--color-primary] prose-a:no-underline hover:prose-a:underline
            prose-li:text-gray-700
            prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to Create Your Invoice?
          </h2>
          <p className="mt-3 text-gray-600">
            Use InvoiceFly to generate professional PDF invoices for free — no sign-up required.
          </p>
          <Link
            href="/invoice-generator"
            className="mt-6 inline-block bg-[--color-primary] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[--color-primary-dark] transition-colors shadow-lg shadow-blue-200"
          >
            Create Free Invoice →
          </Link>
        </div>

        {/* Affiliate Recommendations */}
        <div className="mt-12 border-t border-gray-200 pt-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Need Full Accounting Features?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {affiliates.slice(0, 2).map((product) => (
              <a
                key={product.slug}
                href={`/go/${product.slug}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">{product.name}</span>
                  <span className="text-xs bg-blue-100 text-[--color-primary] px-2 py-1 rounded-full">
                    ★ {product.rating}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{product.description}</p>
                <span className="mt-3 inline-block text-sm text-[--color-primary] font-medium">
                  Try {product.name} →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="space-y-4">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="block border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-gray-900 hover:text-[--color-primary]">
                    {rp.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{rp.description}</p>
                  <span className="mt-2 inline-block text-xs text-gray-500">{rp.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
