import { MetadataRoute } from 'next'

/**
 * Robots.txt configuration for Retroloop
 * Allows crawling of public pages while blocking authenticated routes
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/dashboard',
          '/dashboard/*',
          '/profile',
          '/profile/*',
          '/retro',
          '/retro/*',
          '/auth/*',
          '/api/*',
          '/private/',
        ],
      },
    ],
    sitemap: 'https://retroloop.io/sitemap.xml',
  }
}
