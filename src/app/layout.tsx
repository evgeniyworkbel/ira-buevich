import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { YM_COUNTER_ID } from "@/shared/analytics/yandex-metrika/config";
// import { YandexMetrikaNoscript, YandexMetrikaScript } from "@/shared/analytics";

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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YM_COUNTER_ID}ss', 'ym');

    ym(${YM_COUNTER_ID}ss, 'init', {ssr:true, webvisor:true, trackHash:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`,
          }}
        ></script>
      </head>
      <body className={`${inter.variable} ${urbanist.variable} antialiased`}>
        {/* <YandexMetrikaScript /> */}
        {/* <YandexMetrikaNoscript /> */}
        {children}
      </body>
    </html>
  );
}
