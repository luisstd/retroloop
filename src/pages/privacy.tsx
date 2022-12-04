import type { NextPage } from 'next'
import Head from 'next/head'

import Footer from '@/components/Footer/Footer'
import MenuBar from '@/components/MenuBar/MenuBar'

const PrivacyPolicy: NextPage = () => {
  return (
    <div className='grid justify-center'>
      <Head>
        <title>Privacy Policy</title>
        <meta name='description' content='Agile Retrospectives' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MenuBar />

      <main className='grid h-screen'></main>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
