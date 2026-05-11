import { siteConfig } from "@/config/site"

export const dynamic = "force-static"

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.title}</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    <language>en-us</language>
    <atom:link href="${siteConfig.url}/api/rss" rel="self" type="application/rss+xml"/>
    <item>
      <title>${siteConfig.title}</title>
      <link>${siteConfig.url}</link>
      <description>${siteConfig.description}</description>
      <pubDate>${new Date("2026-05-11").toUTCString()}</pubDate>
      <guid isPermaLink="true">${siteConfig.url}</guid>
    </item>
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
