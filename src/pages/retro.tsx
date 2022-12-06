import { IconFaceIdError } from '@tabler/icons'
import { NextPage } from 'next'
import Head from 'next/head'
import { useSession } from 'next-auth/react'

import MenuBar from '@/components/MenuBar/MenuBar'
import RetroView from '@/components/RetroView/RetroView'

const Retro: NextPage = () => {
  const { status } = useSession()

  return (
    <div className='flex flex-col items-center'>
      <Head>
        <title>Retrospective</title>
        <meta name='description' content='Agile Retrospectives' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MenuBar />

      {status === 'authenticated' ? (
        <RetroView />
      ) : (
        <div className='flex flex-col items-center'>
          <IconFaceIdError size={122} className='m-5' />
          <p className='text-xl'>Not authenticated, please log in first</p>
        </div>
      )}
    </div>
  )
}

export default Retro
