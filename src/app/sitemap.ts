import { MetadataRoute } from 'next'

/**
 * Sitemap configuration for Retroloop
 * Only includes public pages - authenticated pages are excluded
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://retroloop.io'

  return [
    {
      url: baseUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
