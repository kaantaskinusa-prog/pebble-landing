import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Veritabanından verileri çek
  const { rows } = await sql`
    SELECT * FROM emergency_profiles WHERE id = ${id}
  `;
  const profile = rows[0];

  if (!profile) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-6 font-sans">
      <div className="max-w-lg mx-auto space-y-6">
        
        {/* Acil Durum Flaşör Uyarısı */}
        <div className="bg-red-600/20 border-2 border-red-500 rounded-2xl p-4 text-center animate-pulse shadow-[0_0_30px_rgba(239,68,68,0.3)]">
          <h1 className="text-2xl font-black text-red-500 uppercase tracking-widest flex items-center justify-center gap-2">
            <span>🚨</span> EMERGENCY <span>🚨</span>
          </h1>
          <p className="text-red-400 font-semibold mt-1 text-sm">
            MEDICAL INFORMATION INSIDE
          </p>
        </div>

        {/* 911 Hızlı Arama Butonu */}
        <a 
          href="tel:911" 
          className="block w-full bg-red-600 hover:bg-red-500 text-white text-center font-bold text-xl py-4 rounded-2xl shadow-xl transition-colors"
        >
          📞 CALL 911 NOW
        </a>

        {/* Sürücü Bilgileri Kartı */}
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">Driver Details</h2>
          <p className="text-3xl font-extrabold text-white mb-6">{profile.driver_name}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
              <span className="block text-xs text-zinc-500 font-bold mb-1 uppercase">Blood Type</span>
              <span className="text-xl font-bold text-rose-500">{profile.blood_group || 'N/A'}</span>
            </div>
            <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
              <span className="block text-xs text-zinc-500 font-bold mb-1 uppercase">Allergies</span>
              <span className="text-xl font-bold text-orange-400">{profile.allergy || 'None'}</span>
            </div>
          </div>

          <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
            <span className="block text-xs text-zinc-500 font-bold mb-2 uppercase">Medical Notes</span>
            <p className="text-zinc-300 font-medium leading-relaxed">
              {profile.medical_notes || 'No specific medical conditions noted.'}
            </p>
          </div>
        </div>

        {/* Acil Durum Kişileri */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider px-2">Emergency Contacts</h2>
          
          {/* Kişi 1 */}
          {profile.contact1_name && (
            <a href={`tel:${profile.contact1_phone}`} className="block bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between hover:bg-zinc-800 transition-colors">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Primary Contact</span>
                <p className="text-lg font-bold text-white mt-0.5">{profile.contact1_name}</p>
                <p className="text-zinc-400 text-sm mt-1">{profile.contact1_phone}</p>
              </div>
              <div className="bg-emerald-500/20 p-3 rounded-full text-emerald-400">
                📞
              </div>
            </a>
          )}

          {/* Kişi 2 */}
          {profile.contact2_name && (
            <a href={`tel:${profile.contact2_phone}`} className="block bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between hover:bg-zinc-800 transition-colors">
              <div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Secondary Contact</span>
                <p className="text-lg font-bold text-white mt-0.5">{profile.contact2_name}</p>
                <p className="text-zinc-400 text-sm mt-1">{profile.contact2_phone}</p>
              </div>
              <div className="bg-zinc-800 p-3 rounded-full text-zinc-400">
                📞
              </div>
            </a>
          )}
        </div>

      </div>
    </main>
  );
}