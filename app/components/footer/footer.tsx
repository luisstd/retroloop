'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export function Footer() {
  return (
    <>
      <footer className='max-w-screen-2x m-5 rounded-md p-3 dark:border-neutral-200'>
        <div className='grid place-items-center'>
          <NavigationMenu.Root>
            <NavigationMenu.List className='flex items-center gap-2'>
              <NavigationMenu.Item className='text-center'>
                <NavigationMenu.Link
                  className='cursor-poiner rounded-md bg-base-light p-2 px-2 text-sm transition ease-in-out hover:bg-hover-light dark:bg-base-dark dark:hover:bg-hover-dark dark:hover:text-base-dark'
                  href='/privacy'
                >
                  Privacy Policy
                </NavigationMenu.Link>

                <span> | </span>

                <NavigationMenu.Link
                  className='cursor-poiner rounded-md bg-base-light p-2 px-2 text-sm transition ease-in-out hover:bg-hover-light dark:bg-base-dark dark:hover:bg-hover-dark dark:hover:text-base-dark'
                  href='/terms'
                >
                  Terms of Use
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      </footer>
    </>
  )
}
