import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email gerekli' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase environment variables are missing!");
      return NextResponse.json({ error: 'Sunucu yapılandırma hatası' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Supabase'e kaydet
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email }]);

    if (error) {
      console.error("Supabase insert error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // 2. Resend ile hoş geldin e-postası gönder
    try {
      await resend.emails.send({
        from: 'Pebble <onboarding@resend.dev>',
        to: [email],
        subject: "Welcome to Pebble! You're on the list 🚀",
        html: `
          <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0f172a;">Welcome to Pebble! 🎉</h2>
            <p>Hi there,</p>
            <p>Thanks for joining the waitlist for <strong>Pebble</strong>!</p>
            <p>I built Pebble to solve a problem we all face: tracking our driving operations and earnings shouldn't be complicated. My vision is to give you total clarity on your daily performance with zero hassle.</p>
            <p>You're officially in the inner circle. Stay tuned for early access and updates as I build in public!</p>
            <p style="margin-top: 30px;">Best,<br/><strong>Kaan</strong><br/><em>Founder of Pebble</em></p>
          </div>
        `,
      });
    } catch (mailError) {
      console.error("Resend email error:", mailError);
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Catch error:", err);
    return NextResponse.json({ error: err.message || 'Bir hata oluştu' }, { status: 500 });
  }
}