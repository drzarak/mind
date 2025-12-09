export interface ConversationItem {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string | null;
  type?: 'message' | 'function_call' | 'function_call_output';
  status?: 'in_progress' | 'completed' | 'failed';
  formatted?: {
    audio?: Int16Array;
    text?: string;
    transcript?: string;
  };
  function_call?: {
    name: string;
    call_id: string;
    arguments: string;
  };
}

export interface RealtimeEvent {
  type: string;
  event_id?: string;
  [key: string]: unknown;
}

export interface MoodState {
  current: 'calm' | 'anxious' | 'happy' | 'sad' | 'energetic' | 'tired' | 'neutral';
  intensity: number; // 1-10
  timestamp: string;
}

export interface SessionConfig {
  modalities?: string[];
  instructions?: string;
  voice?: string;
  input_audio_format?: string;
  output_audio_format?: string;
  input_audio_transcription?: {
    model: string;
  };
  turn_detection?: {
    type: string;
    threshold?: number;
    prefix_padding_ms?: number;
    silence_duration_ms?: number;
  } | null;
  tools?: unknown[];
  tool_choice?: string;
  temperature?: number;
  max_response_output_tokens?: number | 'inf';
}

export interface AgentConfig {
  name: string;
  instructions: string;
  tools?: unknown[];
  voice?: string;
  temperature?: number;
}
