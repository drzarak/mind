'use client';

interface CrisisBannerProps {
  onClose?: () => void;
}

export default function CrisisBanner({ onClose }: CrisisBannerProps) {
  return (
    <div className="crisis-banner">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">
            🚨 Need Immediate Help?
          </h3>
          <div className="text-sm text-red-700 dark:text-red-300 space-y-1">
            <p>If you&apos;re in crisis or having thoughts of self-harm:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>
                <strong>National Suicide Prevention Lifeline:</strong> Call or text 988
              </li>
              <li>
                <strong>Crisis Text Line:</strong> Text HOME to 741741
              </li>
              <li>
                <strong>Emergency:</strong> Call 911
              </li>
              <li>
                <strong>International:</strong>{' '}
                <a
                  href="https://findahelpline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-red-900"
                >
                  Find your local helpline
                </a>
              </li>
            </ul>
            <p className="mt-2 font-semibold">You&apos;re not alone. Help is available 24/7.</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-red-600 hover:text-red-800 ml-4"
            aria-label="Close"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
