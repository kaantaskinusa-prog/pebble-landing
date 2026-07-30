import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-600">
              <circle cx="16" cy="16" r="16" fill="currentColor" fillOpacity="0.1"/>
              <path d="M16 8C19.3137 8 22 10.6863 22 14C22 17.3137 19.3137 20 16 20C12.6863 20 10 17.3137 10 14C10 10.6863 12.6863 8 16 8Z" fill="currentColor"/>
              <path d="M18 12L22 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-2xl font-bold text-slate-950">
              Pebble
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
            <a href="#features" className="hover:text-teal-600 transition">Features</a>
            <a href="#pricing" className="hover:text-teal-600 transition">Pricing</a>
            <a href="#faq" className="hover:text-teal-600 transition">FAQ</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://buy.stripe.com/your_actual_stripe_link" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition"
            >
              Get Pebble Pro
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 text-center max-w-5xl mx-auto bg-white">
        <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8 border border-teal-100">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
          </span>
          Trusted by 10,000+ Independent Contractors
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-950 mb-8 leading-tight">
          Pebble — 1099 Expenses <br />& Taxes, <span className="text-teal-600">Simplified</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto font-light">
          The essential financial toolkit built specifically for freelancers, gig workers, and self-employed professionals. Scan, track, and report with ease.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://apps.apple.com" 
            className="bg-slate-950 hover:bg-slate-800 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition flex items-center justify-center space-x-2 text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.05 0C18.65 0 24 5.35 24 11.95c0 6.6-5.35 11.95-11.95 11.95S0 18.55 0 11.95C0 5.35 5.35 0 12.05 0zm5.45 13.7c-.9.75-2.1 1.1-3.5 1.1-1.45 0-2.75-.45-3.85-1.35-1.15-.9-1.8-2.2-1.95-3.85-.15-1.85.3-3.45 1.35-4.55.9-.9 2.1-1.35 3.55-1.35 1.35 0 2.55.4 3.65 1.25 1.1.85 1.75 2.05 1.9 3.65.15 1.9-.25 3.55-1.25 4.5zm.5 8.6c-.65.65-1.4.95-2.25.95s-1.6-.35-2.25-1.05c-.65-.75-.9-1.55-.9-2.55 0-.9.3-1.7.9-2.35.65-.65 1.45-1 2.35-1s1.7.35 2.35.95c.65.65 1 1.55 1 2.55 0 1-.25 1.9-.85 2.5z"/></svg>
            <span>Download on App Store</span>
          </a>
          <a
            href="#pricing"
            className="bg-teal-50 text-teal-700 hover:bg-teal-100 font-semibold px-10 py-4 rounded-xl transition flex items-center justify-center text-lg border border-teal-100"
          >
            Web Special (-50% OFF)
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50 px-6 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-950">One Toolkit. Total Financial Clarity.</h2>
            <p className="text-lg text-slate-600 font-light">Stop drowning in spreadsheets and shoeboxes. Pebble gives you the professional-grade financial control you deserve, without the accounting degree.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold text-2xl mb-8 border border-teal-100">⚡</div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-950">AI Receipt Scanner</h3>
              <p className="text-slate-600 leading-relaxed font-light">Snap a photo of any receipt. Our advanced AI instantly extracts the merchant, date, amount, and tax category, logging it perfectly.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold text-2xl mb-8 border border-teal-100">📊</div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-950">Audit-Ready Reports</h3>
              <p className="text-slate-600 leading-relaxed font-light">Generate IRS-compliant Schedule C reports instantly. Export clean PDFs or CSVs for your accountant, making tax season stress-free.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold text-2xl mb-8 border border-teal-100">🔒</div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-950">Bank-Grade Security</h3>
              <p className="text-slate-600 leading-relaxed font-light">Your financial data is precious. Pebble uses end-to-end encryption and secure cloud storage to ensure your information remains private and protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 max-w-5xl mx-auto bg-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-950">Simple Pricing, Massive Savings</h2>
          <p className="text-lg text-slate-600 font-light">Choose the plan that fits your workflow. Save big with our annual web-exclusive offer.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-start">
          
          {/* Monthly Plan */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Monthly</h3>
              <div className="text-5xl font-extrabold text-slate-950 mb-1 tracking-tight">$9.99<span className="text-2xl font-medium text-slate-500">/mo</span></div>
              <p className="text-sm text-slate-500 mb-8">Billed monthly via App Store.</p>
              <ul className="space-y-4 text-base text-slate-700 mb-10 font-light">
                <li className="flex items-start gap-3">✓ <span className='flex-1'>Unlimited receipt scanning (AI OCR)</span></li>
                <li className="flex items-start gap-3">✓ <span className='flex-1'>Automatic business expense categorization</span></li>
                <li className="flex items-start gap-3">✓ <span className='flex-1'>Schedule C PDF Tax Report Export</span></li>
                <li className="flex items-start gap-3">✓ <span className='flex-1'>Basic email support</span></li>
              </ul>
            </div>
            <a 
              href="https://apps.apple.com" 
              className="w-full bg-slate-950 text-white font-semibold py-4 rounded-xl text-center hover:bg-slate-800 transition text-lg"
            >
              Start Free Trial on App Store
            </a>
          </div>

          {/* Yearly Plan (Stripe Highlighted) */}
          <div className="bg-gradient-to-b from-teal-800 to-teal-950 text-white p-10 rounded-3xl shadow-2xl flex flex-col justify-between relative overflow-hidden h-full transform scale-105 border-4 border-teal-200">
            <div className="absolute top-6 right-6 bg-amber-400 text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Best Value (-50%)
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-teal-100 mb-3">Annual Pro</h3>
              <div className="text-5xl font-extrabold text-white mb-1 tracking-tight">$59<span className="text-2xl font-medium text-teal-200">/yr</span></div>
              <p className="text-sm text-teal-200 mb-8">That&apos;s less than $5/month! (Web Exclusive)</p>
              <ul className="space-y-4 text-base text-teal-50 mb-10 font-light">
                <li className="flex items-start gap-3">✓ <span className='flex-1'>Everything in Monthly, plus:</span></li>
                <li className="flex items-start gap-3">✓ <span className='flex-1'><strong>Zero Platform Fees</strong> (Keep more of your money)</span></li>
                <li className="flex items-start gap-3">✓ <span className='flex-1'><strong>Priority Support</strong> (Front of the line)</span></li>
                <li className="flex items-start gap-3">✓ <span className='flex-1'>Advanced Data Export</span></li>
              </ul>
            </div>
            <a 
              href="https://buy.stripe.com/your_actual_stripe_link" 
              className="w-full bg-white text-teal-700 font-bold py-4 rounded-xl text-center hover:bg-teal-50 transition text-lg shadow-xl"
            >
              Secure Web Checkout ($59)
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto bg-teal-900 text-white rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Control of Your Taxes?</h2>
          <p className="text-teal-200 mb-8 max-w-xl mx-auto font-light">Join thousands of independent contractors who save time and money with Pebble every single week.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://apps.apple.com" className="bg-white text-teal-900 font-bold px-8 py-3.5 rounded-xl transition hover:bg-teal-50">
              Download App
            </a>
            <a href="https://buy.stripe.com/your_actual_stripe_link" className="bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-xl transition hover:bg-teal-600 border border-teal-600">
              Get Yearly Access ($59)
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-4">
          <div>&copy; {new Date().getFullYear()} Pebble. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-slate-900 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition">Terms of Service</Link>
            <a href="mailto:support@pebble.app" className="hover:text-slate-900 transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}