import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mind - Your Mental Health & Life Coaching Companion",
  description: "An empathetic AI companion for mental health support and life coaching, powered by OpenAI's Realtime API",
  keywords: "mental health, life coaching, AI therapy, wellness, mindfulness",
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
