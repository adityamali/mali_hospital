export default function handler(req, res) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourwebsite.com';

  res.setHeader('Content-Type', 'text/plain');
  res.send(`
    User-agent: *
    Allow: /
    Sitemap: ${baseUrl}/api/sitemap.xml
  `);
}
