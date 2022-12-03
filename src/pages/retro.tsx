import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import MenuBar from '@/components/MenuBar/MenuBar'
import RetroView from '@/components/RetroView/RetroView'

const Retro: NextPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <Head>
        <title>Retrospective</title>
        <meta name='description' content='Agile Retrospectives' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MenuBar />

      <RetroView />
    </div>
  )
}

export default Retro
