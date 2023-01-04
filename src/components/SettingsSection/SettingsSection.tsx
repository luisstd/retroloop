import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { IconLanguage, IconLayoutKanban, IconUserCircle, IconUsers } from '@tabler/icons'
import { useState } from 'react'

import LanguageSettings from '@/components/SettingsSection/components/LanguageSettings'
import ProfileSettings from '@/components/SettingsSection/components/ProfileSettings'
import RetroSettings from '@/components/SettingsSection/components/RetroSettings'
import TeamSettings from '@/components/SettingsSection/components/TeamSettings'

const SettingsSection = () => {
  const [section, setSection] = useState('profile')

  return (
    <main className='flex flex-col justify-around w-full gap-5 sm:flex-row max-w-screen-2xl'>
      <aside className='p-5 mx-5 text-xl border-2 border-black rounded-md min-w-min max-w-max dark:border-neutral-200'>
        <NavigationMenu.Root orientation='vertical'>
          <NavigationMenu.List className='flex flex-row flex-wrap items-start justify-between gap-4 sm:flex-col sm:justify-start'>
            <NavigationMenu.Item className='flex items-center flex-grow-0 gap-2 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'>
              <IconUserCircle size={24} />
              <NavigationMenu.Link onClick={() => setSection('profile')}>
                Profile
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className='flex items-center flex-grow-0 gap-2 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'>
              <IconLayoutKanban size={24} />
              <NavigationMenu.Link onClick={() => setSection('retro')}>Retros</NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className='flex items-center flex-grow-0 gap-2 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'>
              <IconUsers size={24} />
              <NavigationMenu.Link onClick={() => setSection('team')}>Team</NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className='flex items-center flex-grow-0 gap-2 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'>
              <IconLanguage size={24} />
              <NavigationMenu.Link onClick={() => setSection('language')}>
                Language
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <NavigationMenu.Viewport />
        </NavigationMenu.Root>
      </aside>

      <section className='flex-grow p-5 mx-5 text-xl border-2 border-black rounded-md min-w-min dark:border-neutral-200'>
        {section === 'profile' && <ProfileSettings />}
        {section === 'retro' && <RetroSettings />}
        {section === 'team' && <TeamSettings />}
        {section === 'language' && <LanguageSettings />}
      </section>
    </main>
  )
}

export default SettingsSection
