'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export function Footer() {
  return (
    <>
      <footer className='p-3 m-5 rounded-md dark:border-neutral-200 max-w-screen-2x'>
        <div className='grid place-items-center'>
          <NavigationMenu.Root>
            <NavigationMenu.List className='flex items-center gap-2'>
              <NavigationMenu.Item className='text-center'>
                <NavigationMenu.Link
                  className='p-2 px-2 text-sm transition ease-in-out rounded-md bg-base-light dark:bg-base-dark cursor-poiner hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'
                  href='/privacy'
                >
                  Privacy Policy
                </NavigationMenu.Link>

                <span> | </span>

                <NavigationMenu.Link
                  className='p-2 px-2 text-sm transition ease-in-out rounded-md bg-base-light dark:bg-base-dark cursor-poiner hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'
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
