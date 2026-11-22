import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Roboto } from "next/font/google";
import { Toaster } from "sonner";

import "modern-normalize/modern-normalize.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://strikebull.ch"),

  title: {
    default: "Strikebull MMA Club Chur",
    template: "%s | Strikebull MMA Club",
  },

  description:
    "MMA Training in Chur für Einsteiger und Fortgeschrittene. Probetraining und Mitgliedschaften beim Strikebull MMA Club.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Strikebull MMA Club Chur",
    description: "MMA Training in Chur für Einsteiger und Fortgeschrittene.",
    url: "https://strikebull.ch",
    siteName: "Strikebull MMA Club",
    locale: "de_CH",
    type: "website",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        {children}

        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
