import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIKey } from '@/app/lib/envSetup';
import { OPENAI_CHAT_API_URL } from '@/app/lib/constants';

export async function POST(request: NextRequest) {
  try {
    const apiKey = getOpenAIKey();
    const body = await request.json();

    const response = await fetch(OPENAI_CHAT_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: body.model || 'gpt-4o-mini',
        messages: body.messages || [],
        temperature: body.temperature || 0.7,
        max_tokens: body.max_tokens || 1000,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      return NextResponse.json(
        { error: 'Failed to get completion', details: error },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Completion error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}
