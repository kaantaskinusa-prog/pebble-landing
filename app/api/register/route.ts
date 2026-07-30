import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      driverName,
      bloodGroup,
      allergy,
      medicalNotes,
      contact1Name,
      contact1Phone,
      contact2Name,
      contact2Phone,
    } = body;

    const id = Math.random().toString(36).substring(2, 10);

    await sql`
      INSERT INTO emergency_profiles (
        id, driver_name, blood_group, allergy, medical_notes, 
        contact1_name, contact1_phone, contact2_name, contact2_phone
      ) VALUES (
        ${id}, ${driverName}, ${bloodGroup}, ${allergy}, ${medicalNotes}, 
        ${contact1Name}, ${contact1Phone}, ${contact2Name}, ${contact2Phone}
      )
    `;

    return NextResponse.json({ success: true, id });
  } catch (error: any) {
    console.error('Database Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Database error' }, { status: 500 });
  }
}