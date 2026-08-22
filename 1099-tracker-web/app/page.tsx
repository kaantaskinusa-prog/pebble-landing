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
    appStoreTitle: "Available Now on App Store",
    appStoreDesc: "Download Pebble today and start simplifying your 1099 finances.",
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
    testimonialsTitle: "Loved by Drivers & Contractors",
    testimonialsSubtitle: "See how Pebble is helping independent workers save time and maximize their tax deductions.",
    t1Text: "As a full-time rideshare driver, tracking miles and gas receipts used to be a nightmare. Pebble's AI scanner saves me hours every week!",
    t1Name: "Marcus Vance",
    t1Role: "Rideshare Driver (Orlando)",
    t2Text: "Finally an app that actually speaks my language and gets 1099 taxes. The Schedule C export made tax season an absolute breeze.",
    t2Name: "Elena Rodriguez",
    t2Role: "Independent Courier",
    t3Text: "Clean interface, zero clutter, and super fast. Logging expenses by taking a photo of the receipt is a total game changer.",
    t3Name: "David Chen",
    t3Role: "Delivery Contractor",
    faqHeading: "Frequently Asked Questions",
    faqSubheading: "Got questions? We've got answers.",
    faqs: [
      {
        q: "Is Pebble compliant with IRS tax requirements?",
        a: "Yes! Pebble generates audit-ready Schedule C reports and logs business expenses following standard IRS guidelines to maximize your legal deductions."
      },
      {
        q: "How does the AI receipt scanner work?",
        a: "Simply take a photo of any receipt using your phone's camera. Pebble's optical character recognition (OCR) and AI instantly extract the vendor, date, total amount, and correct tax category."
      },
      {
        q: "Can I use Pebble for multiple delivery or rideshare apps?",
        a: "Absoulutely. Pebble is designed specifically for independent contractors handling multiple income streams like Uber, Lyft, DoorDash, and independent gigs."
      },
      {
        q: "How do I manage my subscription?",
        a: "All subscriptions and free trials are handled securely through your Apple App Store account, making updates or cancellations completely hassle-free."
      }
    ],
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
    appStoreTitle: "Disponible Ahora en App Store",
    appStoreDesc: "Descarga Pebble hoy y comienza a simplificar tus finanzas.",
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
    testimonialsTitle: "Amado por Conductores y Contratistas",
    testimonialsSubtitle: "Vea cómo Pebble ayuda a los trabajadores independientes a ahorrar tiempo y maximizar sus deducciones.",
    t1Text: "Como conductor a tiempo completo, rastrear millas y recibos era una pesadilla. ¡El escáner de IA de Pebble me ahorra horas cada semana!",
    t1Name: "Marcus Vance",
    t1Role: "Conductor (Orlando)",
    t2Text: "Por fin una app que entiende los impuestos 1099. La exportación Schedule C hizo que la temporada de impuestos fuera muy fácil.",
    t2Name: "Elena Rodriguez",
    t2Role: "Mensajera Independiente",
    t3Text: "Interfaz limpia, cero distracciones y muy rápida. Registrar gastos tomando una foto del recibo cambia totalmente el juego.",
    t3Name: "David Chen",
    t3Role: "Contratista de Entregas",
    faqHeading: "Preguntas Frecuentes",
    faqSubheading: "¿Tienes dudas? Aquí tienes las respuestas.",
    faqs: [
      {
        q: "¿Pebble cumple con los requisitos fiscales del IRS?",
        a: "¡Sí! Pebble genera informes Schedule C listos para auditoría y registra gastos comerciales según las pautas estándar del IRS."
      },
      {
        q: "¿Cómo funciona el escáner de recibos con IA?",
        a: "Simplemente tome una foto de cualquier recibo. El OCR y la IA de Pebble extraen instantáneamente el proveedor, fecha y categoría."
      },
      {
        q: "¿Puedo usar Pebble para múltiples aplicaciones de reparto o transporte?",
        a: "Absolutamente. Pebble está diseñado para contratistas con múltiples fuentes de ingresos como Uber, Lyft y DoorDash."
      },
      {
        q: "¿Cómo administro mi suscripción?",
        a: "Todas las suscripciones y pruebas gratuitas se gestionan de forma segura a través de su cuenta de Apple App Store."
      }
    ],
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
    appStoreTitle: "App Store'da Hemen İndirin",
    appStoreDesc: "Pebble'ı bugün indirin ve 1099 finansal süreçlerinizi sadeleştirmeye başlayın.",
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
    testimonialsTitle: "Sürücüler ve Bağımsız Çalışanlar Severek Kullanıyor",
    testimonialsSubtitle: "Pebble'ın bağımsız çalışanların zamandan tasarruf etmesine ve vergi indirimlerini maksimize etmesine nasıl yardımcı olduğunu görün.",
    t1Text: "Tam zamanlı yolcu taşımacılığı yaparken mil ve benzin fişlerini takip etmek kabus gibiydi. Pebble'ın yapay zeka tarayıcısı bana her hafta saatler kazandırıyor!",
    t1Name: "Marcus Vance",
    t1Role: "Sürücü (Orlando)",
    t2Text: "Sonunda 1099 vergilerini gerçekten anlayan bir uygulama çıktı. Schedule C dışa aktarımı vergi sezonunu çocuk oyuncağına çevirdi.",
    t2Name: "Elena Rodriguez",
    t2Role: "Bağımsız Kurye",
    t3Text: "Tertemiz arayüz, sıfır karmaşa ve süper hızlı. Fişin fotoğrafını çekerek masraf kaydetmek oyunun kurallarını tamamen değiştiriyor.",
    t3Name: "David Chen",
    t3Role: "Teslimat Yüklenicisi",
    faqHeading: "Sıkça Sorulan Sorular",
    faqSubheading: "Aklınıza takılan soruların yanıtlarını burada bulabilirsiniz.",
    faqs: [
      {
        q: "Pebble, IRS vergi gereksinimleriyle tam uyumlu mu?",
        a: "Evet! Pebble, yasal indirimlerinizi en üst düzeye çıkarmanıza yardımcı olmak için IRS standartlarına uygun, denetime hazır Schedule C raporları üretir."
      },
      {
        q: "Yapay zeka fiş tarayıcı nasıl çalışıyor?",
        a: "Telefonunuzun kamerasıyla herhangi bir fişin fotoğrafını çekmeniz yeterlidir. Pebble'ın OCR ve yapay zeka altyapısı satıcıyı, tarihi ve tutarı anında ayıklar."
      },
      {
        q: "Birden fazla teslimat veya sürüş uygulaması için Pebble kullanabilir miyim?",
        a: "Kesinlikle. Pebble; Uber, Lyft, DoorDash ve benzeri birden fazla gelir akışını yöneten bağımsız yükleniciler için özel olarak tasarlanmıştır."
      },
      {
        q: "Aboneliğimi nasıl yönetebilirim?",
        a: "Tüm abonelikleriniz ve ücretsiz deneme süreçleriniz Apple App Store hesabınız üzerinden güvenle yönetilir, dilediğiniz an kolayca güncelleyebilir veya iptal edebilirsiniz."
      }
    ],
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Pebble Logo" className="w-14 h-14 object-contain rounded-2xl shadow-sm" />
            <span className="text-3xl font-extrabold tracking-tight text-slate-950">Pebble</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
            <a href="#features" className="hover:text-teal-600 transition">{t.features}</a>
            <a href="#testimonials" className="hover:text-teal-600 transition">Reviews</a>
            <a href="#pricing" className="hover:text-teal-600 transition">{t.pricing}</a>
            <a href="#faq" className="hover:text-teal-600 transition">{t.faq}</a>
          </nav>
          <div className="flex items-center space-x-4">
            <select value={lang} onChange={(e) => setLang(e.target.value as any)} className="bg-slate-100 text-sm px-3 py-2 rounded-xl cursor-pointer">
              <option value="en">English (US)</option>
              <option value="es">Español</option>
              <option value="tr">Türkçe</option>
            </select>
            <a href="https://apps.apple.com" className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition">{t.getPro}</a>
          </div>
        </div>
      </header>

      <section className="pt-24 pb-12 px-6 text-center max-w-5xl mx-auto bg-white">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-8">{t.heroTitleFirst} <br />{t.heroTitleSecond} <span className="text-teal-600">{t.heroTitleHighlight}</span>.</h1>
        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">{t.heroDesc}</p>
        
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-inner mb-12 flex flex-col items-center">
          <h3 className="text-xl font-bold text-slate-900 mb-3">{t.appStoreTitle}</h3>
          <p className="text-slate-600 mb-6 text-sm">{t.appStoreDesc}</p>
          
          <a 
            href="https://apps.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-slate-950 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition shadow-lg text-base flex items-center space-x-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.9 90.4-82.5 102.6-119.3-65.2-30.7-63.3-90-63.3-90zm-184.1-120.9c30.5-36.6 28.3-79.5 28.3-79.5-27.5 1.9-61.1 27.2-61.1 27.2-28.4 31.9-25.4 77.3-25.4 77.3s30.8 32.2 58.2 25z"/>
            </svg>
            <span>{t.downloadApp}</span>
          </a>
        </div>
      </section>

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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-100 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.testimonialsTitle}</h2>
          <p className="text-lg text-slate-600">{t.testimonialsSubtitle}</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <TestimonialCard text={t.t1Text} name={t.t1Name} role={t.t1Role} />
          <TestimonialCard text={t.t2Text} name={t.t2Name} role={t.t2Role} />
          <TestimonialCard text={t.t3Text} name={t.t3Name} role={t.t3Role} />
        </div>
      </section>

      <section id="pricing" className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-4 tracking-tight">{t.pricingTitle}</h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">{t.pricingDesc}</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-200 shadow-sm flex flex-col justify-between">
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

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50 border-t border-slate-100 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-3">{t.faqHeading}</h2>
            <p className="text-slate-600">{t.faqSubheading}</p>
          </div>
          <div className="space-y-4">
            {t.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 font-semibold text-slate-900 flex justify-between items-center focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className={`text-teal-600 font-bold text-xl transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

function TestimonialCard({ text, name, role }: { text: string, name: string, role: string }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
      <p className="text-slate-700 text-sm mb-6 leading-relaxed italic">"{text}"</p>
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
        <span className="text-xs text-teal-600 font-medium">{role}</span>
      </div>
    </div>
  );
}