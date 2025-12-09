// OpenAI API Configuration
export const OPENAI_REALTIME_API_URL = 'https://api.openai.com/v1/realtime';
export const OPENAI_REALTIME_MODEL = 'gpt-4o-realtime-preview-2024-12-17';
export const OPENAI_CHAT_API_URL = 'https://api.openai.com/v1/chat/completions';

// Audio Configuration
export const AUDIO_SAMPLE_RATE = 24000;
export const DEFAULT_VOICE = 'sage';

// Session Configuration
export const DEFAULT_TEMPERATURE = 0.8;
export const DEFAULT_MAX_RESPONSE_TOKENS = 4096;

// VAD Configuration
export const VAD_THRESHOLD = 0.5;
export const VAD_PREFIX_PADDING_MS = 300;
export const VAD_SILENCE_DURATION_MS = 500;
