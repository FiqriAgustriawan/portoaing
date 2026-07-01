import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://fiqriagustriawan.vercel.app/sitemap.xml',
    host: 'https://fiqriagustriawan.vercel.app',
  };
}
