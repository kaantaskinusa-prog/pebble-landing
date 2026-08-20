'use client';

import Link from 'next/link';
import { useState } from 'react';

const content = {
  en: {
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    getPro: "Get Pebble",
    trusted: "Trusted by 10,000+ Independent Contractors",
    heroTitleFirst: "Pebble — 1099 Earnings,",
    heroTitleSecond: "Expenses & Taxes, ",
    heroTitleHighlight: "Simplified",
    heroDesc: "Every pebble builds the road; track your earnings, log expenses, and master your taxes with Pebble.",
    downloadApp: "Download on App Store",
    waitlistTitle: "Get Early Access",
    waitlistDesc: "We're launching soon on the App Store. Join the waitlist to get notified the second we go live!",
    waitlistPlaceholder: "Enter your email address",
    waitlistBtn: "Join Waitlist",
    waitlistSuccess: "You're on the list! We'll notify you soon.",
    videoTitle: "See Pebble in Action",
    videoDesc: "Track daily earnings, log expenses automatically, and take control of your 1099 finances.",
    previewTitle: "Designed for Independent Contractors",
    previewSubtitle: "Take a look inside the app. Clean, powerful, and built to save you time and money.",
    featuresTitle: "One Toolkit. Total Financial Clarity.",
    featuresDesc: "Stop drowning in spreadsheets and shoeboxes. Pebble gives you professional-grade financial control over your earnings and deductions, without the accounting degree.",
    feat1Title: "AI Receipt Scanner",
    feat1Desc: "Snap a photo of any receipt. Our advanced AI instantly extracts the merchant, date, amount, and tax category, logging it perfectly.",
    feat2Title: "Audit-Ready Reports",
    feat2Desc: "Generate IRS-compliant Schedule C reports instantly. Export clean PDFs or CSVs for your accountant, making tax season stress-free.",
    feat3Title: "Bank-Grade Security",
    feat3Desc: "Your financial data is precious. Pebble uses end-to-end encryption and secure cloud storage to ensure your information remains private and protected.",
    feat4Title: "Multi-Language Support",
    feat4Desc: "Available in English, Spanish, and Turkish. Manage your finances comfortably in your native language for maximum accuracy.",
    feat5Title: "Smart Email Summaries",
    feat5Desc: "Get automated weekly, quarterly, and year-end tax summaries delivered straight to your inbox.",
    pricingTitle: "Simple Pricing, Massive Savings",
    pricingDesc: "Choose the plan that fits your workflow. Subscribe securely via the App Store.",
    monthlyPlan: "Monthly",
    monthlyPrice: "$9.99",
    monthlyPeriod: "/mo",
    monthlyDesc: "Billed monthly via App Store.",
    monthlyBtn: "Start Free Trial on App Store",
    monthlyFeats: [
      "Unlimited receipt scanning (AI OCR)",
      "Automatic business expense categorization",
      "Schedule C PDF Tax Report Export",
      "Basic email support"
    ],
    annualPlan: "Annual Pro",
    annualPrice: "$59",
    annualPeriod: "/yr",
    annualDesc: "That's less than $5/month! Billed annually.",
    annualBadge: "BEST VALUE",
    annualBtn: "Start Annual Subscription",
    annualFeats: [
      "Everything In Monthly, plus:",
      "Priority Support",
      "Advanced Data Export"
    ],
    ctaTitle: "Ready to Take Control of Your Finances?",
    ctaDesc: "Join thousands of independent contractors who track their earnings and save money with Pebble every single week.",
    ctaApp: "Download App",
    privacy: "Privacy Policy",
    support: "Support",
    rights: "All rights reserved."
  },
  es: {
    features: "Características",
    pricing: "Precios",
    faq: "Preguntas Frecuentes",
    getPro: "Obtener Pebble",
    trusted: "Con la confianza de más de 10,000 contratistas",
    heroTitleFirst: "Pebble — Ingresos, Gastos",
    heroTitleSecond: "e Impuestos 1099, ",
    heroTitleHighlight: "Simplificados",
    heroDesc: "Cada guijarro construye el camino; rastrea tus ingresos, controla tus gastos y domina tus impuestos fácilmente con Pebble.",
    downloadApp: "Descargar en App Store",
    waitlistTitle: "Obtén Acceso Anticipado",
    waitlistDesc: "Pronto estaremos en la App Store. ¡Únete a la lista de espera para recibir una notificación!",
    waitlistPlaceholder: "Ingresa tu correo electrónico",
    waitlistBtn: "Unirse a la Lista",
    waitlistSuccess: "¡Estás en la lista! Te avisaremos pronto.",
    videoTitle: "Mira Pebble en Acción",
    videoDesc: "Rastrea ganancias diarias, registra gastos automáticamente y toma el control de tus finanzas.",
    previewTitle: "Diseñado para Contratistas Independientes",
    previewSubtitle: "Echa un vistazo al interior de la app. Limpia, potente y diseñada para ahorrarte tiempo y dinero.",
    featuresTitle: "Una herramienta. Claridad financiera total.",
    featuresDesc: "Deje de ahogarse en hojas de cálculo. Pebble le otorga control financiero sobre sus ingresos y deducciones sin complicaciones.",
    feat1Title: "Escáner de Recibos con IA",
    feat1Desc: "Tome una foto de cualquier recibo. Nuestra IA avanzada extrae instantáneamente el comercio, la fecha y la categoría.",
    feat2Title: "Informes Listos para Auditoría",
    feat2Desc: "Genere informes Schedule C compatibles con el IRS al instante. Exporte PDF o CSV limpios para su contador.",
    feat3Title: "Seguridad Bancaria",
    feat3Desc: "Sus datos financieros son valiosos. Pebble utiliza encriptación de extremo a extremo para mantener su privacidad.",
    feat4Title: "Soporte Multiidioma",
    feat4Desc: "Disponible en inglés, español y turco. Administre sus finanzas cómodamente en su idioma nativo.",
    feat5Title: "Resúmenes Inteligentes por Email",
    feat5Desc: "Reciba resúmenes fiscales automatizados semanales, trimestrales y anuales en su correo.",
    pricingTitle: "Precios Simples, Ahorros Masivos",
    pricingDesc: "Elija el plan que se adapte a su flujo de trabajo. Suscríbase de forma segura a través de la App Store.",
    monthlyPlan: "Mensual",
    monthlyPrice: "$9.99",
    monthlyPeriod: "/mes",
    monthlyDesc: "Facturado mensualmente a través de App Store.",
    monthlyBtn: "Iniciar Prueba en App Store",
    monthlyFeats: [
      "Escaneo ilimitado de recibos (IA OCR)",
      "Categorización automática de gastos",
      "Exportación de informes fiscales PDF",
      "Soporte por correo básico"
    ],
    annualPlan: "Pro Anual",
    annualPrice: "$59",
    annualPeriod: "/año",
    annualDesc: "¡Menos de $5 al mes! Facturado anualmente.",
    annualBadge: "MEJOR VALOR",
    annualBtn: "Iniciar Suscripción Anual",
    annualFeats: [
      "Todo lo del plan mensual, más:",
      "Soporte prioritario",
      "Exportación de datos avanzada"
    ],
    ctaTitle: "¿Listo para tomar el control de sus finanzas?",
    ctaDesc: "Únase a miles de contratistas independientes que rastrean sus ingresos y ahorran con Pebble cada semana.",
    ctaApp: "Descargar App",
    privacy: "Política de Privacidad",
    support: "Soporte",
    rights: "Todos los derechos reservados."
  },
  tr: {
    features: "Özellikler",
    pricing: "Fiyatlandırma",
    faq: "S.S.S.",
    getPro: "Pebble'ı İndir",
    trusted: "10.000+ Bağımsız Yüklenicinin Tercihi",
    heroTitleFirst: "Pebble — 1099 Kazançları,",
    heroTitleSecond: "Giderleri ve Vergileri, ",
    heroTitleHighlight: "Basitleştirildi",
    heroDesc: "Her çakıl taşı birikerek yolu kurar; kazançlarını takip et, giderlerini yönet ve vergilerini Pebble ile kolayca kontrol altına al.",
    downloadApp: "App Store'dan İndir",
    waitlistTitle: "Erken Erişim Al",
    waitlistDesc: "Yakında App Store'dayız. Uygulama yayına girdiği an haberdar olmak için bekleme listesine katıl!",
    waitlistPlaceholder: "E-posta adresini gir",
    waitlistBtn: "Listeye Katıl",
    waitlistSuccess: "Listeye eklendin! Çok yakında haber vereceğiz.",
    videoTitle: "Pebble'ı Çalışırken Görün",
    videoDesc: "Günlük kazançlarını takip et, giderlerini otomatik kaydet ve 1099 finansal yönetimini ele al.",
    previewTitle: "Bağımsız Çalışanlar İçin Tasarlandı",
    previewSubtitle: "Uygulamanın içine göz atın. Zamandan ve paradan tasarruf etmeniz için tertemiz ve güçlü bir deneyim.",
    featuresTitle: "Tek Araç. Tam Finansal Netlik.",
    featuresDesc: "Tablolarda ve fiş yığınlarında kaybolmaya son. Pebble; kazançlarını ve giderlerini muhasebe diplomasına ihtiyaç duymadan profesyonelce yönetmeni sağlar.",
    feat1Title: "Yapay Zeka Fiş Tarayıcı",
    feat1Desc: "Herhangi bir fişin fotoğrafını çekin. Gelişmiş yapay zekamız satıcıyı, tarihi ve tutarı anında kaydedip kategorize etsin.",
    feat2Title: "Denetime Hazır Raporlar",
    feat2Desc: "IRS uyumlu Schedule C raporlarını anında oluşturun. Muhasebeciniz için temiz PDF veya CSV olarak dışa aktarın.",
    feat3Title: "Banka Düzeyinde Güvenlik",
    feat3Desc: "Finansal verileriniz güvende. Pebble, uçtan uca şifreleme ve güvenli bulut altyapısı kullanır.",
    feat4Title: "Çoklu Dil Desteği",
    feat4Desc: "İngilizce, İspanyolca ve Türkçe seçenekleriyle. Finansal işlemlerinizi kendi anadilinizde konforla yönetin.",
    feat5Title: "Akıllı E-Posta Özetleri",
    feat5Desc: "Haftalık, üç aylık ve yıl sonu vergi özetlerini doğrudan e-posta kutuna otomatik al.",
    pricingTitle: "Basit Fiyatlandırma, Büyük Tasarruf",
    pricingDesc: "Akışınıza uygun planı seçin. App Store üzerinden güvenle abone olun.",
    monthlyPlan: "Aylık",
    monthlyPrice: "$9.99",
    monthlyPeriod: "/ay",
    monthlyDesc: "App Store üzerinden aylık faturalandırılır.",
    monthlyBtn: "App Store'da Ücretsiz Dene",
    monthlyFeats: [
      "Sınırsız fiş tarama (Yapay Zeka OCR)",
      "Otomatik işletme gideri sınıflandırma",
      "Schedule C PDF Vergi Raporu Dışa Aktarımı",
      "Temel e-posta desteği"
    ],
    annualPlan: "Yıllık Pro",
    annualPrice: "$59",
    annualPeriod: "/yıl",
    annualDesc: "Ayda 5 dolardan az! Yıllık faturalandırılır.",
    annualBadge: "EN İYİ FİYAT",
    annualBtn: "Yıllık Aboneliği Başlat",
    annualFeats: [
      "Aylık plandaki her şeye ek olarak:",
      "Öncelikli Destek",
      "Gelişmiş Veri Dışa Aktarımı"
    ],
    ctaTitle: "Finansal Durumunun Kontrolünü Eline Almaya Hazır mısın?",
    ctaDesc: "Her hafta kazançlarını takip edip Pebble ile paradan tasarruf eden binlerce bağımsız çalışana katılın.",
    ctaApp: "Uygulamayı İndir",
    privacy: "Gizlilik Politikası",
    support: "Destek",
    rights: "Tüm hakları saklıdır."
  }
};

export default function LandingPage() {
  const [lang, setLang] = useState<'en' | 'es' | 'tr'>('en');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const t = content[lang];

  // Supabase'e bağladığımız yeni ve güvenli fonksiyon:
  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(`Hata: ${errorData.error || 'Bir sorun oluştu'}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Bir bağlantı hatası oluştu.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Pebble Logo" className="w-14 h-14 object-contain rounded-2xl shadow-sm" />
            <span className="text-3xl font-extrabold tracking-tight text-slate-950">Pebble</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
            <a href="#features" className="hover:text-teal-600 transition">{t.features}</a>
            <a href="#pricing" className="hover:text-teal-600 transition">{t.pricing}</a>
            <a href="#faq" className="hover:text-teal-600 transition">{t.faq}</a>
          </nav>
          <div className="flex items-center space-x-4">
            <select value={lang} onChange={(e) => setLang(e.target.value as any)} className="bg-slate-100 text-sm px-3 py-2 rounded-xl cursor-pointer">
              <option value="en">English (US)</option>
              <option value="es">Español</option>
              <option value="tr">Türkçe</option>
            </select>
            <a href="https://apps.apple.com" className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold">{t.getPro}</a>
          </div>
        </div>
      </header>

      <section className="pt-24 pb-12 px-6 text-center max-w-5xl mx-auto bg-white">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-8">{t.heroTitleFirst} <br />{t.heroTitleSecond} <span className="text-teal-600">{t.heroTitleHighlight}</span>.</h1>
        <p className="text-xl text-slate-600 mb-10">{t.heroDesc}</p>
        
        {/* Waitlist Form Box */}
        <div className="max-w-md mx-auto bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm mb-12">
          <h3 className="text-lg font-bold text-slate-900 mb-2">{t.waitlistTitle}</h3>
          <p className="text-xs text-slate-500 mb-4">{t.waitlistDesc}</p>
          
          {submitted ? (
            <div className="bg-teal-50 text-teal-800 p-4 rounded-2xl text-sm font-semibold border border-teal-200">
              {t.waitlistSuccess}
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t.waitlistPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white border border-slate-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-teal-600"
              />
              <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-teal-700 transition shadow">
                {t.waitlistBtn}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            {t.videoTitle}
          </h2>
          <p className="text-slate-600 text-base">
            {t.videoDesc}
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 bg-slate-950 aspect-video max-w-4xl mx-auto">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            controls 
            className="w-full h-full object-cover"
          >
            <source src="/pebble-promo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Preview Section with Hover Effects */}
      <section className="py-16 bg-slate-50 border-t border-slate-100 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.previewTitle}</h2>
          <p className="text-lg text-slate-600">{t.previewSubtitle}</p>
        </div>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900 p-2 rounded-[36px] shadow-lg transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <img src="/screen-dashboard.jpg" alt="Dash" className="rounded-[28px]" />
          </div>
          <div className="bg-slate-900 p-2 rounded-[36px] shadow-lg transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <img src="/screen-tax.jpg" alt="Tax" className="rounded-[28px]" />
          </div>
          <div className="bg-slate-900 p-2 rounded-[36px] shadow-lg transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <img src="/screen-history.png" alt="History" className="rounded-[28px]" />
          </div>
          <div className="bg-slate-900 p-2 rounded-[36px] shadow-lg transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <img src="/screen-profile.jpg" alt="Profile" className="rounded-[28px]" />
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20">{t.featuresTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon="⚡" title={t.feat1Title} desc={t.feat1Desc} />
            <FeatureCard icon="📊" title={t.feat2Title} desc={t.feat2Desc} />
            <FeatureCard icon="🔒" title={t.feat3Title} desc={t.feat3Desc} />
            <FeatureCard icon="🌍" title={t.feat4Title} desc={t.feat4Desc} />
            <FeatureCard icon="📧" title={t.feat5Title} desc={t.feat5Desc} />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-4 tracking-tight">{t.pricingTitle}</h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">{t.pricingDesc}</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Monthly Card */}
            <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{t.monthlyPlan}</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-5xl font-extrabold tracking-tight text-slate-950">{t.monthlyPrice}</span>
                  <span className="text-slate-500 ml-1 font-medium">{t.monthlyPeriod}</span>
                </div>
                <p className="text-xs text-slate-500 mb-8">{t.monthlyDesc}</p>
                
                <ul className="space-y-4 mb-8 text-sm text-slate-700">
                  {t.monthlyFeats.map((feat, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-teal-600 font-bold mr-3">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="https://apps.apple.com" className="block w-full text-center py-4 rounded-2xl bg-slate-950 text-white font-semibold hover:bg-slate-800 transition shadow-md">
                {t.monthlyBtn}
              </a>
            </div>

            {/* Annual Card */}
            <div className="bg-teal-950 text-white p-8 rounded-[32px] border-2 border-teal-600 shadow-xl flex flex-col justify-between relative">
              <div className="absolute -top-4 right-8 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                {t.annualBadge}
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-white">{t.annualPlan}</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-5xl font-extrabold tracking-tight text-white">{t.annualPrice}</span>
                  <span className="text-teal-300 ml-1 font-medium">{t.annualPeriod}</span>
                </div>
                <p className="text-xs text-teal-200/80 mb-8">{t.annualDesc}</p>
                
                <ul className="space-y-4 mb-8 text-sm text-teal-100">
                  {t.annualFeats.map((feat, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-teal-400 font-bold mr-3">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="https://apps.apple.com" className="block w-full text-center py-4 rounded-2xl bg-white text-teal-950 font-semibold hover:bg-teal-50 transition shadow-md">
                {t.annualBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-teal-950 rounded-[36px] py-16 px-8 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">{t.ctaTitle}</h2>
          <p className="text-teal-200/90 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">{t.ctaDesc}</p>
          <a href="https://apps.apple.com" className="inline-block bg-white text-teal-950 font-bold px-8 py-4 rounded-2xl hover:bg-teal-50 transition shadow-lg">
            {t.ctaApp}
          </a>
        </div>
      </section>

      <footer className="py-12 px-6 bg-slate-50 border-t text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Pebble. {t.rights}
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-teal-600 transition">{t.privacy}</Link>
            <Link href="/support" className="hover:text-teal-600 transition">{t.support}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
      <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600 text-sm font-light">{desc}</p>
    </div>
  );
}