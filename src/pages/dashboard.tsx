import type { NextPage } from 'next'
import Head from 'next/head'

import MenuBar from '../components/MenuBar'
import RetroSection from '../components/RetroSection'
import TeamSection from '../components/TeamSection'

const Dashboard: NextPage = () => (
  <div className='flex flex-col items-center'>
    <Head>
      <title>Dashboard</title>
      <meta name='description' content='Agile Retrospectives' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div className='grid place-items-center'>
      <MenuBar />
    </div>

    <main className='grid w-screen h-screen mx-5 place-items-center max-w-screen-2xl'>
      <RetroSection />

      <TeamSection />
    </main>
  </div>
)

export default Dashboard
