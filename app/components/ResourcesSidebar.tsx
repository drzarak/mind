'use client';

export default function ResourcesSidebar() {
  return (
    <div className="w-80 bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 overflow-y-auto">
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Resources</h2>
          
          <div className="space-y-4">
            <section>
              <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">
                Crisis Support
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:988" className="text-blue-500 hover:underline">
                    988 - Suicide & Crisis Lifeline
                  </a>
                </li>
                <li>
                  <a href="sms:741741" className="text-blue-500 hover:underline">
                    Text HOME to 741741
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">
                ADHD Resources
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://chadd.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    CHADD - ADHD Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://add.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    ADDA - Adult ADHD
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.understood.org/adhd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Understood.org - ADHD Info
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">
                Quick Coping Techniques
              </h3>
              <div className="space-y-2">
                <details className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <summary className="cursor-pointer font-medium text-sm">
                    Pomodoro Technique (ADHD-Friendly)
                  </summary>
                  <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                    <p>Work in focused 25-minute chunks:</p>
                    <ol className="list-decimal list-inside ml-2 mt-1">
                      <li>Set timer for 25 minutes</li>
                      <li>Focus on ONE task</li>
                      <li>Take a 5-minute break</li>
                      <li>Repeat 4 times</li>
                      <li>Take a longer 15-30 min break</li>
                    </ol>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <summary className="cursor-pointer font-medium text-sm">
                    5-4-3-2-1 Grounding
                  </summary>
                  <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                    <p>For anxiety - name:</p>
                    <ul className="list-disc list-inside ml-2 mt-1">
                      <li>5 things you can see</li>
                      <li>4 things you can touch</li>
                      <li>3 things you can hear</li>
                      <li>2 things you can smell</li>
                      <li>1 thing you can taste</li>
                    </ul>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <summary className="cursor-pointer font-medium text-sm">
                    Box Breathing
                  </summary>
                  <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Breathe in for 4 counts</li>
                      <li>Hold for 4 counts</li>
                      <li>Breathe out for 4 counts</li>
                      <li>Hold for 4 counts</li>
                      <li>Repeat 4 times</li>
                    </ol>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <summary className="cursor-pointer font-medium text-sm">
                    Progressive Muscle Relaxation
                  </summary>
                  <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                    <p>Tense and release each muscle group:</p>
                    <ul className="list-disc list-inside ml-2 mt-1">
                      <li>Hands & arms</li>
                      <li>Face & jaw</li>
                      <li>Neck & shoulders</li>
                      <li>Chest & back</li>
                      <li>Legs & feet</li>
                    </ul>
                  </div>
                </details>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">
                Helpful Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.mentalhealth.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    MentalHealth.gov
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nami.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    NAMI - Mental Health Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.samhsa.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    SAMHSA - Find Treatment
                  </a>
                </li>
              </ul>
            </section>

            <section className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <p className="font-semibold mb-2">Important Disclaimer:</p>
                <p>
                  Mind is an AI companion for support and guidance. It is NOT a substitute
                  for professional mental health care. If you&apos;re experiencing a mental health
                  emergency, please contact emergency services or a crisis helpline immediately.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
