import type { NextPage } from 'next'
import Head from 'next/head'

import Footer from '@/components/Footer/Footer'
import MenuBar from '@/components/MenuBar/MenuBar'

const TermsOfUse: NextPage = () => {
  return (
    <div className='grid justify-center'>
      <Head>
        <title>Terms of Use</title>
        <meta name='description' content='Agile Retrospectives' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MenuBar />

      <main className='grid h-screen'></main>

      <Footer />
    </div>
  )
}

export default TermsOfUse
