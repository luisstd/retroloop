import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='p-3 m-5 rounded-md dark:border-neutral-200 max-w-screen-2x'>
        <div className='grid place-items-center'>
          <div>
            <a
              href='/privacy'
              className='p-2 px-2 text-sm transition ease-in-out rounded-md cursor-poiner hover:bg-neutral-100 dark:hover:text-black'
            >
              Privacy Policy
            </a>

            <span> | </span>

            <a
              href='/terms'
              className='p-2 px-2 text-sm transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'
            >
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
