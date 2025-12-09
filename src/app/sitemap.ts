import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://callquantumhvac.com';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/quote',
    '/schedule',
    '/services',
    '/projects',
    '/testimonials',
    '/privacy',
  ];

  // Service pages
  const servicePages = [
    '/services/heating',
    '/services/air-conditioning',
    '/services/ventilation',
    '/services/maintenance',
    '/services/installation',
    '/services/commercial',
    '/services/residential',
    '/services/industrial',
    '/services/refrigeration',
    '/services/sheet-metal',
  ];

  // Project pages
  const projectPages = [
    '/projects/office-complex',
    '/projects/manufacturing',
    '/projects/luxury-home',
  ];

  const allPages = [...staticPages, ...servicePages, ...projectPages];

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.8 : 0.6,
  }));
}
