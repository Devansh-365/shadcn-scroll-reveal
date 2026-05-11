import { siteConfig } from "@/config/site"
import { type MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: "Scroll Reveal",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#1a1614",
    theme_color: "#1a1614",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}
