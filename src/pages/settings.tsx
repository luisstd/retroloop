import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import MenuBar from '@/components/MenuBar/MenuBar'
import SettingsSection from '@/components/SettingsSection/SettingsSection'

const Settings: NextPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <Head>
        <title>Settings</title>
        <meta name='description' content='Agile Retrospectives' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MenuBar />

      <SettingsSection />
    </div>
  )
}

export default Settings
