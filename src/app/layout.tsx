import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import { YandexMetrikaNoscript, YandexMetrikaScript } from "@/shared/analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lingua",
  description: "Школа английского языка",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <YandexMetrikaScript />
      </head>
      <body className={`${inter.variable} ${urbanist.variable} antialiased`}>
        <YandexMetrikaNoscript />
        {children}
      </body>
    </html>
  );
}
