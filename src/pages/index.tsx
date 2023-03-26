import {
  IconAffiliate,
  IconBrandOpenSource,
  IconBulb,
  IconInfinity,
  IconLogin,
  IconRotate360,
  IconUsers,
} from '@tabler/icons-react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Footer from '@/components/Footer/Footer'
import MenuBar from '@/components/MenuBar/MenuBar'

const Landingpage: NextPage = () => (
  <div className='grid justify-center landing-pattern dark:landing-pattern-dark'>
    <Head>
      <title>Retroloop</title>
      <meta name='description' content='Agile Retrospectives' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <MenuBar />

    <main className='flex flex-col items-center w-screen h-screen max-w-screen-2xl'>
      <section className='flex flex-col items-center w-full row-start-1 gap-5 px-2 my-5 mb-20'>
        <div className='flex items-center gap-2'>
          <IconInfinity size={72} />
          <h1 className='text-5xl italic font-semibold'>retroloop</h1>
        </div>
        <span className='text-4xl font-medium text-center'>Agile retrospectives made easy</span>
        <p className='text-2xl text-center'>
          Create a powerful feedback loop for continuous team improvement
        </p>
      </section>

      <section className='grid w-5/6 grid-cols-1 my-2 border-2 rounded-md shadow-md w grid-rows-auto md:grid-cols-2 md:w-11/12 min-h-min max-h-max border-base-dark dark:border-base-light bg-base-light dark:bg-base-dark'>
        <div className='flex flex-col w-full col-start-1 row-start-1 gap-3 p-10'>
          <h3 className='mb-5 font-bold text-accent-light dark:text-accent-dark'>
            A platform for effective retrospectives
          </h3>
          <div className='flex items-center gap-6 md:justify-start'>
            <IconInfinity size={72} className='block md:hidden' />
            <h2 className='text-2xl font-bold md:text-4xl'>Simplify your retrospectives</h2>
          </div>
          <p className='my-5 text-lg'>
            For teams of any size and projects in any domain, our retrospective tool makes it easy
            to gather feedback, identify areas for improvement, and boost your team&apos;s
            performance.
          </p>
          <button className='self-start p-2 font-bold btn'>Get started</button>
        </div>

        <div className='flex flex-col items-center w-full gap-6 p-10 md:row-start-1 md:col-start-2'>
          <div className='text-start'>
            <div className='flex items-center gap-2 mb-1'>
              <IconLogin size={32} className='text-accent-light dark:text-accent-dark' />
              <h3 className='font-bold'>Seamless login</h3>
            </div>
            <p>
              Get started quickly via e-mail login or an OAuth provider of your choice. Jump right
              into conducting effective retrospectives.
            </p>
          </div>

          <div className='text-start'>
            <div className='flex items-center gap-2 mb-1'>
              <IconBrandOpenSource size={32} className='text-accent-light dark:text-accent-dark' />
              <h3 className='font-bold'>Open-source & self-hostable</h3>
            </div>
            <p>
              Host the tool on your own infrastructure for added privacy and security, and benefit
              from the open-source nature that allows for customization and contribution.
            </p>
          </div>

          <div className='text-start'>
            <div className='flex items-center gap-2 mb-1'>
              <IconRotate360 size={32} className='text-accent-light dark:text-accent-dark' />
              <h3 className='font-bold'>Streamlined retrospectives</h3>
            </div>
            <p>
              Our user-friendly interface makes it effortless to gather and organize feedback,
              ensuring your retrospectives are focused and productive.
            </p>
          </div>
        </div>
      </section>

      <section className='grid w-5/6 my-2 border-2 rounded-md shadow-md md:grid-cols-2 md:w-11/12 min-h-min max-h-max border-base-dark dark:border-base-light bg-base-light dark:bg-base-dark'>
        <div className='flex flex-col row-start-1 gap-3 p-10 md:col-start-2'>
          <h3 className='mb-5 font-bold text-accent-light dark:text-accent-dark'>
            A resource for continuous improvement
          </h3>
          <div className='flex items-center justify-center gap-6 md:justify-start'>
            <IconInfinity size={72} className='block md:hidden' />
            <h2 className='text-2xl font-bold md:text-4xl'>Maximize team growth</h2>
          </div>
          <p className='my-5 text-lg'>
            Leverage our retrospective tool to identify opportunities for growth, streamline
            processes, and foster a culture of continuous improvement.
          </p>
          <button className='self-start p-2 font-bold btn'>Get started</button>
        </div>

        <div className='flex flex-col items-center col-start-1 row-start-2 gap-6 p-10 md:row-start-1'>
          <div className=' text-start m'>
            <div className='flex items-center gap-2 mb-1'>
              <IconBulb size={32} className='text-accent-light dark:text-accent-dark' />
              <h3 className='font-bold'>Actionable insights</h3>
            </div>
            <p>
              Transform feedback into concrete action items that drive meaningful change and help
              your team reach its full potential.
            </p>
          </div>

          <div className='text-start'>
            <div className='flex items-center gap-2 mb-1'>
              <IconUsers size={32} className='text-accent-light dark:text-accent-dark' />
              <h3 className='font-bold'>Built for modern teams</h3>
            </div>
            <p>
              Our retrospective tool is designed to support the diverse needs of today&apos;s agile
              teams, with a focus on simplicity, effectiveness, and collaboration.
            </p>
          </div>

          <div className='text-start'>
            <div className='flex items-center gap-2 mb-1'>
              <IconAffiliate size={32} className='text-accent-light dark:text-accent-dark' />
              <h3 className='font-bold'>Transparent & collaborative</h3>
            </div>
            <p>
              Encourage open communication and collaboration by making your retrospectives
              transparent and inclusive for every team member.
            </p>
          </div>
        </div>
      </section>

      {/* <section className='grid w-5/6 my-2 border-2 rounded-md shadow-md md:grid-cols-2 md:w-4/6 min-h-min max-h-max border-base-dark dark:border-base-light bg-base-light dark:bg-base-dark'>
        <div className='flex flex-col col-start-1 gap-3 p-10'>
          <h3 className='mb-5 font-bold text-accent-light dark:text-accent-dark'>
            A platform for effective retrospectives
          </h3>
          <div className='flex items-center justify-center gap-2'>
            <IconInfinity size={72} />
            <h2 className='text-4xl font-bold'>Simplify your retrospectives</h2>
          </div>
          <p className='my-5 text-lg'>
            For teams of any size and projects in any domain, our retrospective tool makes it easy
            to gather feedback, identify areas for improvement, and boost your team&apos;s
            performance.
          </p>
          <button className='self-start p-2 font-bold btn'>Get started</button>
        </div>

        <div className='flex flex-col items-center col-start-2 gap-3 p-10'>
          <div className=' text-start m'>
            <div className='flex items-center gap-2 mb-1'>
              <IconLogin size={32} className='text-accent-light dark:text-accent-dark' />
              <h3 className='font-bold'>Seamless login</h3>
            </div>
            <p>
              Get started quickly without the need for creating an account or providing personal
              information. Jump right into conducting effective retrospectives.
            </p>
          </div>

          <div className='text-start'>
            <div className='flex items-center gap-2 mb-1'>
              <IconBrandOpenSource size={32} className='text-accent-light dark:text-accent-dark' />
              <h3 className='font-bold'>Transparent & collaborative</h3>
            </div>
            <p>
              Encourage open communication and collaboration by making your retrospectives
              transparent and inclusive for every team member.
            </p>
          </div>

          <div className='text-start'>
            <div className='flex items-center gap-2 mb-1'>
              <IconRotate360 size={32} className='text-accent-light dark:text-accent-dark' />
              <h3 className='font-bold'>Streamlined retrospectives</h3>
            </div>
            <p>
              Our user-friendly interface makes it effortless to gather and organize feedback,
              ensuring your retrospectives are focused and productive.
            </p>
          </div>
        </div>
      </section> */}
      <Footer />
    </main>
  </div>
)

export default Landingpage
