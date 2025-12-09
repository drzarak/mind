export function setupEnv() {
  if (!process.env.OPENAI_API_KEY) {
    console.warn(
      'Warning: OPENAI_API_KEY is not set. The app will not function properly without it.'
    );
  }
}

export function getOpenAIKey(): string {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error('OPENAI_API_KEY environment variable is required');
  }
  return key;
}
