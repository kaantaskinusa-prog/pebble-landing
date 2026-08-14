export default function SupportPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-slate-900 font-sans">
      <h1 className="text-3xl font-bold mb-6">Pebble Support</h1>
      <p className="text-slate-600 mb-8 text-sm">Need help with your account, subscriptions, or tax reports? We are here for you.</p>
      
      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Get in Touch</h2>
        <p className="text-sm text-slate-700">For any support inquiries, bug reports, or cancellation assistance regarding your App Store subscription, please email us directly at:</p>
        <div className="pt-2">
          <a href="mailto:support@pebble-app.com" className="text-teal-600 font-bold text-lg hover:underline">support@pebble-app.com</a>
        </div>
      </div>
    </main>
  );
}