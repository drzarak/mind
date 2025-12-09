import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIKey } from '@/app/lib/envSetup';
import { OPENAI_REALTIME_MODEL, DEFAULT_MAX_RESPONSE_TOKENS } from '@/app/lib/constants';

export async function POST(request: NextRequest) {
  try {
    const apiKey = getOpenAIKey();
    const body = await request.json();

    const response = await fetch('https://api.openai.com/v1/realtime/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: body.model || OPENAI_REALTIME_MODEL,
        voice: body.voice || 'sage',
        modalities: body.modalities || ['text', 'audio'],
        instructions: body.instructions || '',
        temperature: body.temperature || 0.8,
        max_response_output_tokens: body.max_response_output_tokens || DEFAULT_MAX_RESPONSE_TOKENS,
        ...body,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      return NextResponse.json(
        { error: 'Failed to create session', details: error },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Session creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}
