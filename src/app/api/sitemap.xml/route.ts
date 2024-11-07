// /src/app/api/sitemap/route.ts
import { NextResponse } from 'next/server';

const baseUrl = 'https://malihospital.com';

interface Page {
  loc: string;
  priority: number;
}

const pages: Page[] = [
  { loc: `${baseUrl}/`, priority: 1 },
  { loc: `${baseUrl}/about`, priority: 0.8 },
  { loc: `${baseUrl}/contact`, priority: 0.6 }
];

export function GET() {

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      page => `
    <url>
      <loc>${page.loc}</loc>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}