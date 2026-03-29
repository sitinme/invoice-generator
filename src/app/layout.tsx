import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'InvoiceFly — Free Online Invoice Generator',
    template: '%s | InvoiceFly',
  },
  description:
    'Create professional invoices for free. No sign-up required. Download as PDF instantly. Perfect for freelancers and small businesses.',
  openGraph: {
    title: 'InvoiceFly — Free Online Invoice Generator',
    description:
      'Create professional invoices for free. No sign-up required. Download as PDF instantly.',
    type: 'website',
    locale: 'en_US',
    url: 'https://invoicefly.com',
    siteName: 'InvoiceFly',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InvoiceFly — Free Online Invoice Generator',
    description:
      'Create professional invoices for free. No sign-up required. Download as PDF instantly.',
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
