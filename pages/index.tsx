import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { IconBrandGithub } from '@tabler/icons'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Retroloop</title>
      <meta name='description' content='Agile Retrospectives' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='grid place-items-center h-screen'>
      <div className='grid place-items-center'>
        <Image src={'/retroloop-logo.png'} width={575} height={145}></Image>
        <Link href={'https://github.com/luisstd/retroloop'}>
          <a rel='noopener noreferrer '>
            <IconBrandGithub className='cursor-pointer' size={42}></IconBrandGithub>
          </a>
        </Link>
      </div>
    </main>
  </div>
)

export default Home
