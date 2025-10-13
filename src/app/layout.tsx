import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { YandexMetrika } from "@/shared/analytics";

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
        {/** todo: подумать, надо ли метрику включать только на проде или нет */}
        <YandexMetrika />
      </head>
      <body className={`${inter.variable} ${urbanist.variable} antialiased`}>{children}</body>
    </html>
  );
}
