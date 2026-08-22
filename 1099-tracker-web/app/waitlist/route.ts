import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Supabase URL ve Key bilgilerin
const supabaseUrl = 'https://buraya-proje-id-gelecek.supabase.co';
const supabaseKey = 'sb_publishable_...'; 

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'E-posta adresi gerekli.' }, { status: 400 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }]);

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ error: 'Bu e-posta adresi zaten listede kayıtlı.' }, { status: 400 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Sunucu hatası oluştu.' }, { status: 500 });
  }
}