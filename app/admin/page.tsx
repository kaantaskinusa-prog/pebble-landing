import { sql } from '@vercel/postgres';

export default async function AdminPage() {
  // Tüm kayıtları veritabanından çek
  const { rows } = await sql`SELECT * FROM emergency_profiles ORDER BY id DESC`;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
          <h1 className="text-2xl font-black text-white">📋 Admin Dashboard</h1>
          <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-400 font-bold">
            Toplam Kayıt: {rows.length}
          </span>
        </div>

        <div className="space-y-4">
          {rows.map((profile) => (
            <div key={profile.id} className="bg-zinc-900/80 border border-zinc-800 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white">{profile.driver_name}</h2>
                  <span className="bg-rose-500/20 text-rose-400 text-xs px-2 py-0.5 rounded font-bold">
                    {profile.blood_group || 'N/A'}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mt-1">
                  📞 {profile.contact1_name} ({profile.contact1_phone})
                </p>
                <p className="text-xs font-mono text-zinc-600 mt-2">
                  ID: {profile.id}
                </p>
              </div>

              <a 
                href={`/s/${profile.id}`} 
                target="_blank" 
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors w-full sm:w-auto text-center"
              >
                Profili Gör ↗
              </a>
            </div>
          ))}

          {rows.length === 0 && (
            <div className="text-center py-12 text-zinc-500">
              Henüz veritabanında hiç kayıt bulunmuyor.
            </div>
          )}
        </div>

      </div>
    </main>
  );
}