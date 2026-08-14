export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-slate-900 font-sans">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: August 2026</p>
      
      <div className="space-y-6 text-slate-700 leading-relaxed text-sm">
        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">1. Information We Collect</h2>
          <p>Pebble is designed with your privacy in mind. When you use our app, we process information strictly necessary for earnings, expense tracking, and tax categorization (such as receipt images processed via OCR and entered financial data).</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">2. Data Security</h2>
          <p>We use bank-grade security and end-to-end encryption to protect your financial logs and personal information. Your data is stored securely in the cloud and is never sold to third parties.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">3. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, you can reach out to us through our Support page.</p>
        </section>
      </div>
    </main>
  );
}