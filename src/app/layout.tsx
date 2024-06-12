import type { Metadata } from "next";

import { simplonNormFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Studio - Shop",
  description:
    "Be the first to know about the latest fashion and beauty trends and find your personal guide for the best lifestyle and wellness tips. Join our community now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={simplonNormFont.className}>{children}</body>
    </html>
  );
}
