import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://promo.codepath.dev.br/sitemap.xml',
    host: 'https://promo.codepath.dev.br',
  }
}
