import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://callquantumhvac.com';
  const currentDate = new Date();

  // Core pages - highest priority
  const corePages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/quote', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  ];

  // Service pages - high priority for local SEO
  const servicePages = [
    { url: '/services/heating', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/services/air-conditioning', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/services/commercial', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/services/residential', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/services/refrigeration', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/services/industrial', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/ventilation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/maintenance', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/installation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/sheet-metal', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  // Project/portfolio pages
  const projectPages = [
    { url: '/projects', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/projects/office-complex', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/projects/manufacturing', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/projects/luxury-home', priority: 0.6, changeFrequency: 'monthly' as const },
  ];

  // Other pages
  const otherPages = [
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/testimonials', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/schedule', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const allPages = [...corePages, ...servicePages, ...projectPages, ...otherPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
