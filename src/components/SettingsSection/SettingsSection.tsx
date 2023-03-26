import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { IconLanguage, IconLayoutKanban, IconUserCircle, IconUsers } from '@tabler/icons-react'
import { useState } from 'react'

import LanguageSettings from '@/components/SettingsSection/components/LanguageSettings'
import ProfileSettings from '@/components/SettingsSection/components/ProfileSettings'
import RetroSettings from '@/components/SettingsSection/components/RetroSettings'
import TeamSettings from '@/components/SettingsSection/components/TeamSettings'

const SettingsSection = () => {
  const [section, setSection] = useState('profile')

  return (
    <main className='flex flex-col justify-around w-full gap-5 sm:flex-row max-w-screen-2xl'>
      <aside className='p-5 mx-5 text-xl border-2 rounded-md shadow-md border-base-dark min-w-min max-w-max dark:border-base-light'>
        <NavigationMenu.Root orientation='vertical'>
          <NavigationMenu.List className='flex flex-row flex-wrap items-start justify-between gap-4 sm:flex-col sm:justify-start'>
            <NavigationMenu.Link onClick={() => setSection('profile')}>
              <NavigationMenu.Item className='flex items-center flex-grow-0 gap-2 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'>
                <IconUserCircle size={24} />
                Profile
              </NavigationMenu.Item>
            </NavigationMenu.Link>

            <NavigationMenu.Link onClick={() => setSection('retro')}>
              <NavigationMenu.Item className='flex items-center flex-grow-0 gap-2 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'>
                <IconLayoutKanban size={24} />
                Retros
              </NavigationMenu.Item>
            </NavigationMenu.Link>

            <NavigationMenu.Link onClick={() => setSection('team')}>
              <NavigationMenu.Item className='flex items-center flex-grow-0 gap-2 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'>
                <IconUsers size={24} />
                Team
              </NavigationMenu.Item>
            </NavigationMenu.Link>

            <NavigationMenu.Link onClick={() => setSection('language')}>
              <NavigationMenu.Item className='flex items-center flex-grow-0 gap-2 p-2 transition ease-in-out rounded-md cursor-pointer hover:bg-hover-light dark:hover:bg-hover-dark dark:hover:text-base-dark'>
                <IconLanguage size={24} />
                Language
              </NavigationMenu.Item>
            </NavigationMenu.Link>
          </NavigationMenu.List>

          <NavigationMenu.Viewport />
        </NavigationMenu.Root>
      </aside>

      <section className='flex-grow grid-cols-2 p-5 mx-5 text-xl border-2 rounded-md shadow-md border-base-dark min-w-min dark:border-base-light'>
        {section === 'profile' && <ProfileSettings />}
        {section === 'retro' && <RetroSettings />}
        {section === 'team' && <TeamSettings />}
        {section === 'language' && <LanguageSettings />}
      </section>
    </main>
  )
}

export default SettingsSection
