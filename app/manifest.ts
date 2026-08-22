import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.product}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F7FAFF",
    theme_color: "#0286FF",
    // Points at the stable public asset rather than the app-router-generated
    // icon route, whose URL Next.js hashes internally.
    icons: [{ src: "/bythron-logo-v2.png", sizes: "676x676", type: "image/png" }],
  };
}
