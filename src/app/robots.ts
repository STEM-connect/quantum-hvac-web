import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://callquantumhvac.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/component-demo'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
