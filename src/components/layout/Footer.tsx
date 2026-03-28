import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">InvoiceFly</h3>
            <p className="text-sm leading-relaxed">
              Free online invoice generator for freelancers, small businesses, and
              entrepreneurs. Create professional invoices in seconds and download as
              PDF — no sign-up required.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/invoice-generator" className="hover:text-white transition-colors">Invoice Generator</Link></li>
              <li><Link href="/templates" className="hover:text-white transition-colors">Templates</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} InvoiceFly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
