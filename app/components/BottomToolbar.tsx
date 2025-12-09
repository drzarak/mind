'use client';

interface BottomToolbarProps {
  isConnected: boolean;
  isRecording: boolean;
  useVAD: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
  onToggleRecording: () => void;
  onToggleVAD: () => void;
}

export default function BottomToolbar({
  isConnected,
  isRecording,
  useVAD,
  onConnect,
  onDisconnect,
  onToggleRecording,
  onToggleVAD,
}: BottomToolbarProps) {
  return (
    <div className="audio-controls">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              isConnected ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <span className="text-sm">
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {!isConnected ? (
            <button
              onClick={onConnect}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium"
            >
              Connect
            </button>
          ) : (
            <>
              <button
                onClick={onToggleRecording}
                className={`px-6 py-3 rounded-full font-medium ${
                  isRecording
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                {isRecording ? '🎤 Recording...' : '🎤 Push to Talk'}
              </button>

              <button
                onClick={onToggleVAD}
                className={`px-4 py-2 rounded-lg font-medium text-sm ${
                  useVAD
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {useVAD ? 'VAD: On' : 'VAD: Off'}
              </button>

              <button
                onClick={onDisconnect}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium"
              >
                Disconnect
              </button>
            </>
          )}
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          {useVAD ? 'Auto-detect' : 'Manual'}
        </div>
      </div>
    </div>
  );
}
