import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export function GET() {
  const base = siteConfig.url.replace(/\/$/, "");
  const body = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
