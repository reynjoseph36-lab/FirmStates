import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arbor Guitars | Handcrafted Electric & Semi-Hollow Instruments",
  description:
    "Boutique electric, semi-hollow, and baritone guitars hand-carved in small batches from seasoned tone woods with scatter-wound pickups and thin-skin nitrocellulose finishes.",
  keywords: [
    "Arbor Guitars",
    "Handcrafted Guitars",
    "Boutique Electric Guitar",
    "Luthier",
    "Roasted Swamp Ash",
    "Gold Foil Pickups",
    "Custom Guitar Build",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
