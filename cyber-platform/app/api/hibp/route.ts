import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

  // Note: To make this real, you need an API key from Have I Been Pwned.
  // For now, we will return some mock data so you can build the UI without paying for an API key yet.
  
  // MOCK DATA RESPONSE:
  return NextResponse.json({
    emailTested: email,
    breaches: [
      { name: 'LinkedIn', year: 2012, data: ['Emails', 'Passwords'] },
      { name: 'Canva', year: 2019, data: ['Emails', 'Names', 'Passwords'] },
    ]
  });
}