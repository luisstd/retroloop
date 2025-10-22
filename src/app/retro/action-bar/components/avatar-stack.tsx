import { SpaceMember } from '@ably/spaces'
import { useMembers } from '@ably/spaces/react'
import { useEffect } from 'react'

import { Loader } from '@/app/components/loader/loader'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/avatar'
import { Tooltip } from '@/app/ui/tooltip'
import { useSession } from '@/lib/auth-client'

export function AvatarStack() {
  const { data: session } = useSession()
  const { others, self, space } = useMembers()

  const maxVisibleAvatars = 5 - (window.innerWidth < 1280 ? 2 : 0)
  const connectedMembers = others.filter((member) => member.isConnected)
  const visibleMembers = connectedMembers.slice(0, maxVisibleAvatars)
  const remainingCount = connectedMembers.length - maxVisibleAvatars

  const getInitials = (member: SpaceMember) => {
    const { profileData } = member
    const name = profileData?.name as string

    if (!name) {
      return 'U'
    }

    return name
      .split(' ')
      .map((word: string) => word.charAt(0))
      .join('')
  }

  useEffect(() => {
    if (space && session) {
      space.enter({
        name: session.user.name,
        image: session.user.image,
      })
      const handleBeforeUnload = () => {
        space.leave()
      }

      window.addEventListener('beforeunload', handleBeforeUnload)

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload)
        space.leave()
      }
    }
  }, [space, session])

  if (!session) {
    return <Loader isLoading />
  }

  return (
    <div className='inline-flex items-center -space-x-2'>
      {self && (
        <Tooltip.Provider>
          <Tooltip>
            <Tooltip.Trigger>
              <Avatar className='ring-background h-8 w-8 ring-2'>
                <AvatarImage
                  alt='User avatar'
                  src={self.profileData?.image as string}
                />
                <AvatarFallback className='bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center font-bold'>
                  {getInitials(self)}
                </AvatarFallback>
              </Avatar>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>{self.profileData?.name as string} (You)</p>
            </Tooltip.Content>
          </Tooltip>
        </Tooltip.Provider>
      )}

      {visibleMembers.map((member) => (
        <Tooltip.Provider key={member.clientId}>
          <Tooltip>
            <Tooltip.Trigger>
              <Avatar className='ring-background h-8 w-8 ring-2'>
                <AvatarImage
                  alt='User avatar'
                  src={member.profileData?.image as string}
                />
                <AvatarFallback className='bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center font-bold'>
                  {getInitials(member)}
                </AvatarFallback>
              </Avatar>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>{member.profileData?.name as string}</p>
            </Tooltip.Content>
          </Tooltip>
        </Tooltip.Provider>
      ))}

      {remainingCount > 0 && (
        <Tooltip.Provider>
          <Tooltip>
            <Tooltip.Trigger>
              <Avatar className='ring-background h-8 w-8 ring-2'>
                <AvatarFallback className='bg-muted text-muted-foreground flex h-8 w-8 items-center justify-center font-medium'>
                  +{remainingCount}
                </AvatarFallback>
              </Avatar>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>
                {remainingCount} more{' '}
                {remainingCount === 1 ? 'participant' : 'participants'}
              </p>
            </Tooltip.Content>
          </Tooltip>
        </Tooltip.Provider>
      )}
    </div>
  )
}
