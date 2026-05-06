import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HospiMate — Autonomous Medical Waste Recycling Robot",
  description:
    "HospiMate by Lombok is an autonomous robot that collects, disinfects, and recycles used medical syringes into reusable polypropylene granules — built for Tunisia's hospitals, clinics, and labs.",
  keywords: [
    "HospiMate",
    "Lombok",
    "medical waste",
    "syringe recycling",
    "autonomous robot",
    "Tunisia",
    "polypropylene",
    "healthcare sustainability",
  ],
  authors: [{ name: "Lombok" }],
  openGraph: {
    title: "HospiMate — Autonomous Medical Waste Recycling Robot",
    description:
      "Collecting, disinfecting, and recycling used medical syringes into reusable PP granules for Tunisian healthcare facilities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
