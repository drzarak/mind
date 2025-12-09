import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mind - Dr. Zarak | ADHD & Mental Health Support",
  description: "Your personal AI mental health companion specializing in ADHD, anxiety, and life coaching. Meet Dr. Zarak - evidence-based support powered by OpenAI's Realtime API",
  keywords: "mental health, ADHD, life coaching, AI therapy, Dr. Zarak, wellness, mindfulness, anxiety support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
