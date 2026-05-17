import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Practical AI Workflows | AI Automation for Small Businesses",
  description:
    "I build simple AI workflows that help small businesses organize customer inquiries, draft replies, track leads, and save time, without replacing human judgment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${lora.variable} font-sans antialiased bg-brand-bg text-brand-text`}
      >
        {children}
      </body>
    </html>
  );
}
