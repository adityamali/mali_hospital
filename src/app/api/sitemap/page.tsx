import { NextApiRequest, NextApiResponse } from 'next';
import { create } from 'xmlbuilder';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://malihospital.com';

  const staticPages = [
    '/',
    '/about',
    '/contact',
    '/payments',
    '/services',
    '/sitemap',
  ];

  const urlSet = staticPages.map((path) => ({
    loc: `${baseUrl}${path}`,
    changefreq: 'monthly',
    priority: 0.8,
  }));

  const fullUrlSet = [
    ...urlSet,
  ];

  const urlset = create({ version: '1.0', encoding: 'UTF-8' }).element('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
  });

  fullUrlSet.forEach((entry) => {
    const url = urlset.element('url');
    url.element('loc', entry.loc);
    url.element('changefreq', entry.changefreq || 'monthly');
    url.element('priority', entry.priority || 0.5);
  });

  const xml = urlset.end({ pretty: true });

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
}
