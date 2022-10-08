import React, { useState } from 'react'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { IconLanguage, IconLayoutKanban, IconUserCircle, IconUsers } from '@tabler/icons'

import ProfileSettings from '@/components/SettingsSection/components/ProfileSettings'
import RetroSettings from '@/components/SettingsSection/components/RetroSettings'
import TeamSettings from '@/components/SettingsSection/components/TeamSettings'
import LanguageSettings from '@/components/SettingsSection/components/LanguageSettings'

const SettingsSection = () => {
  const [section, setSection] = useState('profile')

  return (
    <main className='grid w-9/12 grid-cols-4 mx-5 mb-10 h-min max-w-screen-2xl'>
      <aside className='col-span-1 p-5 m-5 text-xl border-2 border-black rounded-md min-w-min max-w-min dark:border-neutral-200'>
        <NavigationMenu.Root orientation='vertical'>
          <NavigationMenu.List className='flex flex-col items-start justify-center gap-4 '>
            <NavigationMenu.Item className='flex items-center gap-2 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'>
              <IconUserCircle size={24} />
              <NavigationMenu.Link onClick={() => setSection('profile')}>
                Profile
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className='flex items-center gap-2 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'>
              <IconLayoutKanban size={24} />
              <NavigationMenu.Link onClick={() => setSection('retro')}>Retros</NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className='flex items-center gap-2 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'>
              <IconUsers size={24} />
              <NavigationMenu.Link onClick={() => setSection('team')}>Team</NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className='flex items-center gap-2 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:text-black'>
              <IconLanguage size={24} />
              <NavigationMenu.Link onClick={() => setSection('language')}>
                Language
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <NavigationMenu.Viewport />
        </NavigationMenu.Root>
      </aside>

      <section className='col-span-3 p-2 m-5 text-xl border-2 border-black rounded-md dark:border-neutral-200'>
        {section === 'profile' && <ProfileSettings />}
        {section === 'retro' && <RetroSettings />}
        {section === 'team' && <TeamSettings />}
        {section === 'language' && <LanguageSettings />}
      </section>
    </main>
  )
}

export default SettingsSection
