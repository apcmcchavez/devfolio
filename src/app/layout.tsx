import type { Metadata } from "next";
import {
  Courier_Prime,
  Press_Start_2P,
  Silkscreen,
  Sixtyfour_Convergence,
  Sixtyfour,
} from "next/font/google";

import "./globals.css";

// Body text
const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-courier",
});

// Section headings
const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-press-start",
});

// Card headings
const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-silkscreen",
});

// iyah.exe text
const sixtyfour = Sixtyfour_Convergence({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sixtyfour",
});

const sixtyfourMono = Sixtyfour({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sixtyfour-mono",
});

export const metadata: Metadata = {
  title: "iyah.exe",
  description: "Iyah Chavez's retro arcade developer portfolio.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${courierPrime.variable}
        ${pressStart.variable}
        ${silkscreen.variable}
        ${sixtyfour.variable}
        ${sixtyfourMono.variable}
      `}
    >
      <body>{children}</body>
    </html>
  );
}