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
    heroTitleFirst: "Pebble — 1099 Expenses",
    heroTitleSecond: "& Taxes, ",
    heroTitleHighlight: "Simplified",
    heroDesc: "Every pebble builds the road; easily track your finances with Pebble.",
    downloadApp: "Download on App Store",
    featuresTitle: "One Toolkit. Total Financial Clarity.",
    featuresDesc: "Stop drowning in spreadsheets and shoeboxes. Pebble gives you the professional-grade financial control you deserve, without the accounting degree.",
    feat1Title: "AI Receipt Scanner",
    feat1Desc: "Snap a photo of any receipt. Our advanced AI instantly extracts the merchant, date, amount, and tax category, logging it perfectly.",
    feat2Title: "Audit-Ready Reports",
    feat2Desc: "Generate IRS-compliant Schedule C reports instantly. Export clean PDFs or CSVs for your accountant, making tax season stress-free.",
    feat3Title: "Bank-Grade Security",
    feat3Desc: "Your financial data is precious. Pebble uses end-to-end encryption and secure cloud storage to ensure your information remains private and protected.",
    pricingTitle: "Simple Pricing, Massive Savings",
    pricingDesc: "Choose the plan that fits your workflow. Subscribe securely via the App Store.",
    monthlyPlan: "Monthly",
    monthlyPrice: "$9.99",
    monthlyPeriod: "/mo",
    monthlyDesc: "Billed monthly via App Store.",
    monthlyBtn: "Start Free Trial on App Store",
    annualPlan: "Annual Pro",
    annualPrice: "$59",
    annualPeriod: "/yr",
    annualDesc: "That's less than $5/month! Billed annually.",
    annualBadge: "Best Value",
    annualBtn: "Start Annual Subscription",
    ctaTitle: "Ready to Take Control of Your Taxes?",
    ctaDesc: "Join thousands of independent contractors who save time and money with Pebble every single week.",
    ctaApp: "Download App",
    rights: "All rights reserved."
  },
  es: {
    features: "Características",
    pricing: "Precios",
    faq: "Preguntas Frecuentes",
    getPro: "Obtener Pebble",
    trusted: "Con la confianza de más de 10,000 contratistas",
    heroTitleFirst: "Pebble — Gastos e Impuestos 1099,",
    heroTitleSecond: "",
    heroTitleHighlight: "Simplificados",
    heroDesc: "Cada guijarro construye el camino; lleva tus finanzas fácilmente con Pebble.",
    downloadApp: "Descargar en App Store",
    featuresTitle: "Una herramienta. Claridad financiera total.",
    featuresDesc: "Deje de ahogarse en hojas de cálculo. Pebble le otorga el control financiero de nivel profesional que se merece.",
    feat1Title: "Escáner de Recibos con IA",
    feat1Desc: "Tome una foto de cualquier recibo. Nuestra IA avanzada extrae instantáneamente el comercio, la fecha y la categoría.",
    feat2Title: "Informes Listos para Auditoría",
    feat2Desc: "Genere informes Schedule C compatibles con el IRS al instante. Exporte PDF o CSV limpios para su contador.",
    feat3Title: "Seguridad Bancaria",
    feat3Desc: "Sus datos financieros son valiosos. Pebble utiliza encriptación de extremo a extremo para mantener su privacidad.",
    pricingTitle: "Precios Simples, Ahorros Masivos",
    pricingDesc: "Elija el plan que se adapte a su flujo de trabajo. Suscríbase de forma segura a través de la App Store.",
    monthlyPlan: "Mensual",
    monthlyPrice: "$9.99",
    monthlyPeriod: "/mes",
    monthlyDesc: "Facturado mensualmente a través de App Store.",
    monthlyBtn: "Iniciar Prueba en App Store",
    annualPlan: "Pro Anual",
    annualPrice: "$59",
    annualPeriod: "/año",
    annualDesc: "¡Menos de $5 al mes! Facturado anualmente.",
    annualBadge: "Mejor Valor",
    annualBtn: "Iniciar Suscripción Anual",
    ctaTitle: "¿Listo para tomar el control de sus impuestos?",
    ctaDesc: "Únase a miles de contratistas independientes que ahorran tiempo y dinero con Pebble cada semana.",
    ctaApp: "Descargar App",
    rights: "Todos los derechos reservados."
  },
  tr: {
    features: "Özellikler",
    pricing: "Fiyatlandırma",
    faq: "S.S.S.",
    getPro: "Pebble'ı İndir",
    trusted: "10.000+ Bağımsız Yüklenicinin Tercihi",
    heroTitleFirst: "Pebble — 1099 Giderleri",
    heroTitleSecond: "ve Vergiler,",
    heroTitleHighlight: "Basitleştirildi",
    heroDesc: "Her çakıl taşı birikerek yolu kurar; hesabını Pebble ile kolayca tut.",
    downloadApp: "App Store'dan İndir",
    featuresTitle: "Tek Araç. Tam Finansal Netlik.",
    featuresDesc: "Tablolarda ve fiş yığınlarında kaybolmaya son. Pebble, muhasebe diplomasına ihtiyaç duymadan profesyonel kontrol sağlar.",
    feat1Title: "Yapay Zeka Fiş Tarayıcı",
    feat1Desc: "Herhangi bir fişin fotoğrafını çekin. Gelişmiş yapay zekamız satıcıyı, tarihi ve tutarı anında kaydedip kategorize etsin.",
    feat2Title: "Denetime Hazır Raporlar",
    feat2Desc: "IRS uyumlu Schedule C raporlarını anında oluşturun. Muhasebeciniz için temiz PDF veya CSV olarak dışa aktarın.",
    feat3Title: "Banka Düzeyinde Güvenlik",
    feat3Desc: "Finansal verileriniz güvende. Pebble, uçtan uca şifreleme ve güvenli bulut altyapısı kullanır.",
    pricingTitle: "Basit Fiyatlandırma, Büyük Tasarruf",
    pricingDesc: "Akışınıza uygun planı seçin. App Store üzerinden güvenle abone olun.",
    monthlyPlan: "Aylık",
    monthlyPrice: "$9.99",
    monthlyPeriod: "/ay",
    monthlyDesc: "App Store üzerinden aylık faturalandırılır.",
    monthlyBtn: "App Store'da Ücretsiz Dene",
    annualPlan: "Yıllık Pro",
    annualPrice: "$59",
    annualPeriod: "/yıl",
    annualDesc: "Ayda 5 dolardan az! Yıllık faturalandırılır.",
    annualBadge: "En İyi Fiyat",
    annualBtn: "Yıllık Aboneliği Başlat",
    ctaTitle: "Vergilerinizin Kontrolünü Elinize Almaya Hazır mısınız?",
    ctaDesc: "Her hafta Pebble ile zamandan ve paradan tasarruf eden binlerce bağımsız çalışana katılın.",
    ctaApp: "Uygulamayı İndir",
    rights: "Tüm hakları saklıdır."
  }
};

export default function LandingPage() {
  const [lang, setLang] = useState<'en' | 'es' | 'tr'>('en');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 bg-teal-50 border border-teal-100 rounded-2xl flex items-center justify-center text-teal-600 shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4C7 4 3 8 3 13c0 3.5 2 6.5 5 8 1.5.8 3.5 1 4 1s2.5-.2 4-1c3-1.5 5-4.5 5-8 0-5-4-9-9-9zm0 2c3.9 0 7 3.1 7 7 0 2.2-1.1 4.5-3.3 5.7-1.1.6-2.4.8-3.7.8s-2.6-.2-3.7-.8C6.1 17.5 5 15.2 5 13c0-3.9 3.1-7 7-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-950">
              Pebble
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
            <a href="#features" className="hover:text-teal-600 transition">{t.features}</a>
            <a href="#pricing" className="hover:text-teal-600 transition">{t.pricing}</a>
            <a href="#faq" className="hover:text-teal-600 transition">{t.faq}</a>
          </nav>

          <div className="flex items-center space-x-4">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'en' | 'es' | 'tr')}
              className="bg-slate-100 text-slate-800 text-sm font-medium px-3 py-2 rounded-xl border border-slate-200 outline-none cursor-pointer focus:ring-2 focus:ring-teal-500 transition"
            >
              <option value="en">English (US)</option>
              <option value="es">Español</option>
              <option value="tr">Türkçe</option>
            </select>

            <a
              href="https://apps.apple.com" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition"
            >
              {t.getPro}
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
          {t.trusted}
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-950 mb-8 leading-tight">
          {t.heroTitleFirst} <br />{t.heroTitleSecond} <span className="text-teal-600">{t.heroTitleHighlight}</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto font-light">
          {t.heroDesc}
        </p>
        <div className="flex justify-center">
          <a
            href="https://apps.apple.com" 
            className="bg-slate-950 hover:bg-slate-800 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition flex items-center justify-center space-x-2 text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.05 0C18.65 0 24 5.35 24 11.95c0 6.6-5.35 11.95-11.95 11.95S0 18.55 0 11.95C0 5.35 5.35 0 12.05 0zm5.45 13.7c-.9.75-2.1 1.1-3.5 1.1-1.45 0-2.75-.45-3.85-1.35-1.15-.9-1.8-2.2-1.95-3.85-.15-1.85.3-3.45 1.35-4.55.9-.9 2.1-1.35 3.55-1.35 1.35 0 2.55.4 3.65 1.25 1.1.85 1.75 2.05 1.9 3.65.15 1.9-.25 3.55-1.25 4.5zm.5 8.6c-.65.65-1.4.95-2.25.95s-1.6-.35-2.25-1.05c-.65-.75-.9-1.55-.9-2.55 0-.9.3-1.7.9-2.35.65-.65 1.45-1 2.35-1s1.7.35 2.35.95c.65.65 1 1.55 1 2.55 0 1-.25 1.9-.85 2.5z"/></svg>
            <span>{t.downloadApp}</span>
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50 px-6 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-950">{t.featuresTitle}</h2>
            <p className="text-lg text-slate-600 font-light">{t.featuresDesc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold text-2xl mb-8 border border-teal-100">⚡</div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-950">{t.feat1Title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">{t.feat1Desc}</p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold text-2xl mb-8 border border-teal-100">📊</div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-950">{t.feat2Title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">{t.feat2Desc}</p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold text-2xl mb-8 border border-teal-100">🔒</div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-950">{t.feat3Title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">{t.feat3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 max-w-5xl mx-auto bg-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-950">{t.pricingTitle}</h2>
          <p className="text-lg text-slate-600 font-light">{t.pricingDesc}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-start">
          
          {/* Monthly Plan */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">{t.monthlyPlan}</h3>
              <div className="text-5xl font-extrabold text-slate-950 mb-1 tracking-tight">{t.monthlyPrice}<span className="text-2xl font-medium text-slate-500">{t.monthlyPeriod}</span></div>
              <p className="text-sm text-slate-500 mb-8">{t.monthlyDesc}</p>
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
              {t.monthlyBtn}
            </a>
          </div>

          {/* Yearly Plan */}
          <div className="bg-gradient-to-b from-teal-800 to-teal-950 text-white p-10 rounded-3xl shadow-2xl flex flex-col justify-between relative overflow-hidden h-full transform scale-105 border-4 border-teal-200">
            <div className="absolute top-6 right-6 bg-amber-400 text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              {t.annualBadge}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-teal-100 mb-3">{t.annualPlan}</h3>
              <div className="text-5xl font-extrabold text-white mb-1 tracking-tight">{t.annualPrice}<span className="text-2xl font-medium text-teal-200">{t.annualPeriod}</span></div>
              <p className="text-sm text-teal-200 mb-8">{t.annualDesc}</p>
              <ul className="space-y-4 text-base text-teal-50 mb-10 font-light">
                <li className="flex items-start gap-3">✓ <span className='flex-1'>Everything in Monthly, plus:</span></li>
                <li className="flex items-start gap-3">✓ <span className='flex-1'><strong>Priority Support</strong></span></li>
                <li className="flex items-start gap-3">✓ <span className='flex-1'>Advanced Data Export</span></li>
              </ul>
            </div>
            <a 
              href="https://apps.apple.com" 
              className="w-full bg-white text-teal-700 font-bold py-4 rounded-xl text-center hover:bg-teal-50 transition text-lg shadow-xl"
            >
              {t.annualBtn}
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto bg-teal-900 text-white rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-teal-200 mb-8 max-w-xl mx-auto font-light">{t.ctaDesc}</p>
          <div className="flex justify-center">
            <a href="https://apps.apple.com" className="bg-white text-teal-900 font-bold px-8 py-3.5 rounded-xl transition hover:bg-teal-50">
              {t.ctaApp}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-4">
          <div>&copy; {new Date().getFullYear()} Pebble. {t.rights}</div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-slate-900 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition">Terms of Service</Link>
            <a href="mailto:support@usepebble.co" className="hover:text-slate-900 transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}