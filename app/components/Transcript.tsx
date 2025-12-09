'use client';

import { ConversationItem } from '@/app/types';
import ReactMarkdown from 'react-markdown';

interface TranscriptProps {
  items: ConversationItem[];
}

export default function Transcript({ items }: TranscriptProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {items.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          <p className="text-lg mb-2">Welcome to Mind 🧠</p>
          <p>Your personal ADHD & mental health companion</p>
          <p className="text-sm mt-2">Dr. Zarak is here to listen and support you</p>
          <p className="text-sm mt-4">Start speaking to begin your session...</p>
        </div>
      )}
      {items.map((item) => (
        <div key={item.id}>
          {item.type === 'message' && (
            <div
              className={`${
                item.role === 'user' ? 'message-user ml-8' : 'message-assistant mr-8'
              }`}
            >
              <div className="flex items-start gap-2">
                <div className="flex-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    {item.role === 'user' ? 'You' : 'Dr. Zarak'}
                  </div>
                  {item.content && (
                    <div className="prose dark:prose-invert max-w-none">
                      <ReactMarkdown>{item.content}</ReactMarkdown>
                    </div>
                  )}
                  {item.formatted?.transcript && (
                    <div className="text-sm italic text-gray-600 dark:text-gray-400 mt-1">
                      {item.formatted.transcript}
                    </div>
                  )}
                  {item.status === 'in_progress' && (
                    <div className="flex gap-1 mt-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {item.type === 'function_call' && (
            <div className="message-tool">
              <div className="text-xs font-mono">
                🔧 Function Call: {item.function_call?.name}
              </div>
            </div>
          )}
          {item.type === 'function_call_output' && (
            <div className="message-tool">
              <div className="text-xs font-mono">
                ✅ Function Response
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
