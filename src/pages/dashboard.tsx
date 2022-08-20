import type { NextPage } from 'next'
import Head from 'next/head'

import MenuBar from '../../components/MenuBar'
import RetroSection from '../../components/RetroSection'
import TeamSection from '../../components/TeamSection'

const Dashboard: NextPage = () => (
  <div>
    <Head>
      <title>Dashboard</title>
      <meta name='description' content='Agile Retrospectives' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <MenuBar />
    <main className='grid h-screen col-span-2 row-span-2 m-2 '>
      <RetroSection />

      <TeamSection />
    </main>
  </div>
)

export default Dashboard
