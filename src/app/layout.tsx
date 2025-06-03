import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk', // Optional: for CSS variables
  weight: ['300', '400', '500', '600', '700'], // Specify needed weights
});

export const metadata: Metadata = {
  title: "Onchain Chaos",
  description: "Born from alpha, raised in chaos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body
        className={`${spaceGrotesk.className}`}
      >
        {children}
      </body>
    </html>
  );
}
