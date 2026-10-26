import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('[Support Request Received]', data);

    return NextResponse.json({
      success: true,
      message: 'Support request received successfully. Our team will contact you shortly.',
      data: {
        timestamp: new Date().toISOString(),
        name: data.name || data.agencyName || 'Valued Partner'
      }
    });
  } catch (error) {
    console.error('Error handling support request:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
}
