import { IconBrandGithub, IconInfinity } from '@tabler/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Footer from '@/components/Footer/Footer'
import MenuBar from '@/components/MenuBar/MenuBar'

const Landingpage: NextPage = () => (
  <div className='grid justify-center'>
    <Head>
      <title>Retroloop</title>
      <meta name='description' content='Agile Retrospectives' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <MenuBar />

    <main className='grid h-screen place-items-center'>
      <div className='grid place-items-center'>
        <div className='flex items-center gap-5'>
          <IconInfinity size={128} />
          <span className='italic text-7xl'>retroloop</span>
        </div>
        <Link href={'https://github.com/luisstd/retroloop'}>
          <a rel='noopener noreferrer '>
            <IconBrandGithub className='m-5 cursor-pointer' size={42} />
          </a>
        </Link>
      </div>
    </main>

    <Footer />
  </div>
)

export default Landingpage
