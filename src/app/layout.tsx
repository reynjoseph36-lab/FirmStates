import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Firmstate | Prime Real Estate & Precision Asset Management",
  description:
    "Firmstate is an elite real estate acquisition and institutional property management platform, stewarding prime residential and commercial assets globally.",
  keywords: [
    "Firmstate",
    "Luxury Real Estate",
    "Property Management",
    "Asset Management",
    "Real Estate Investment",
    "Penthouses",
    "Prime Estates",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>{children}</body>
    </html>
  );
}

