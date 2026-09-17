import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "European Heritage Travel | Places. People. Heritage.",
  description:
    "Curated stories from Europe's most iconic heritage hotels, luxury destinations and timeless events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${dancingScript.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
