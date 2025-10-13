import { YM_COUNTER_ID } from "./src/shared/analytics/yandex-metrika/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mc.yandex.ru",
        port: "",
        pathname: `/watch/${YM_COUNTER_ID}`,
        search: "",
      },
    ],
  },
};

export default nextConfig;
