export const GET = () => {
  return new Response(`
User-agent: *
Disallow:
Sitemap: https://malihospital.com/sitemap.xml
`, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};