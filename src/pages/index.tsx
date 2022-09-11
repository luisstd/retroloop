import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { IconBrandGithub } from '@tabler/icons'
import MenuBar from '@/components/MenuBar'

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
        <Image src={'/retroloop-logo.png'} width={575} height={145} className='rounded-lg' />
        <Link href={'https://github.com/luisstd/retroloop'}>
          <a rel='noopener noreferrer '>
            <IconBrandGithub className='m-5 cursor-pointer' size={42} />
          </a>
        </Link>
      </div>
    </main>
  </div>
)

export default Landingpage
