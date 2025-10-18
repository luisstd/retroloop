'use client'

import { IconBrandGithub } from '@tabler/icons-react'
import { getYear } from 'date-fns'
import Link from 'next/link'

export function Footer() {
  const currentYear = getYear(new Date())

  return (
    <footer className='mt-16 w-full'>
      <div className='relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t-2 bg-muted/30'>
        <div className='mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:py-16'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {/* Left Column - Open Source */}
            <div className='flex flex-col gap-3 text-center md:text-left'>
              <h3 className='text-sm font-semibold'>Open Source</h3>
              <a
                href='https://github.com/luisstd/retroloop'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground flex items-center justify-center gap-2 text-sm hover:underline md:justify-start'
              >
                <IconBrandGithub size={16} />
                View on GitHub
              </a>
            </div>

            {/* Center Column - Navigation */}
            <div className='flex flex-col gap-3 text-center'>
              <h3 className='text-sm font-semibold'>Legal</h3>
              <div className='flex flex-col gap-2'>
                <Link
                  href='/privacy'
                  className='text-muted-foreground text-sm hover:underline'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='/terms'
                  className='text-muted-foreground text-sm hover:underline'
                >
                  Terms of Service
                </Link>
                <Link
                  href='/imprint'
                  className='text-muted-foreground text-sm hover:underline'
                >
                  Imprint
                </Link>
              </div>
            </div>

            {/* Right Column - Trust Signals */}
            <div className='flex flex-col gap-3 text-center md:text-right'>
              <h3 className='text-sm font-semibold'>Made in Europe 🇪🇺</h3>
            </div>
          </div>

          {/* Copyright */}
          <div className='pt-6 text-center'>
            <a
              href='https://noisia.co'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground text-xs hover:underline'
            >
              &copy; {currentYear} Noisia Labs OÜ
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
