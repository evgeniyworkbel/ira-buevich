"use client";

import Image from "next/image";
import Script from "next/script";
import { YM_COUNTER_ID } from "./config";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const YandexMetrika = () => {
  const pathname = usePathname();
  useEffect(() => {
    // @ts-expect-error "ym" is global function which is created by Yandex metrica script.
    // To leran more, see sources of external lib https://github.com/v-doronin/next-yandex-metrica/blob/main/src/lib/ym.ts
    window.ym(YM_COUNTER_ID, "hit", pathname);
  }, [pathname]);

  return (
    <>
      {/* Yandex.Metrika counter START */}
      <Script
        id="yandex-metrika-analytics"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
         (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.webvisor.org/metrika/tag_ww.js?id=${YM_COUNTER_ID}', 'ym');

          ym(${YM_COUNTER_ID}, 'init', {ssr:true, webvisor:true, trackHash:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`,
        }}
      />
      <noscript>
        <Image
          className="sr-only"
          src={`https://mc.yandex.ru/watch/${YM_COUNTER_ID}`}
          width={1}
          height={1}
          alt=""
        />
      </noscript>
      {/* Yandex.Metrika counter END */}
    </>
  );
};
