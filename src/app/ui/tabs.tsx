import {
  Tab,
  TabGroup,
  TabList,
  TabListProps,
  TabPanel,
  TabPanelProps,
  TabPanels,
  TabProps,
} from '@headlessui/react'

import { cn } from '@/utils/cn'

const Tabs = TabGroup
const TabsPanels = TabPanels

interface ITabsTriggerList extends TabListProps {
  className?: string
}
const TabsTriggerList = ({
  children,
  className,
  ...props
}: ITabsTriggerList) => {
  return (
    <TabList className={cn('flex flex-row space-x-2', className)} {...props}>
      {children}
    </TabList>
  )
}

interface ITabsTrigger extends TabProps {
  className?: string
}
const TabsTrigger = ({ children, className, ...props }: ITabsTrigger) => {
  return (
    <Tab
      className={cn(
        'data-selected:border-border data-selected:bg-primary data-selected:text-primary-foreground focus-visible:ring-primary flex items-center justify-center rounded-md border-2 border-transparent p-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 data-selected:font-semibold',
        className,
      )}
      {...props}
    >
      {children}
    </Tab>
  )
}

interface ITabsContent extends TabPanelProps {
  className?: string
}
const TabsContent = ({ children, className, ...props }: ITabsContent) => {
  return (
    <TabPanel
      className={cn('border-border mt-2 border-2 p-4', className)}
      {...props}
    >
      {children}
    </TabPanel>
  )
}

export { Tabs, TabsContent, TabsPanels, TabsTrigger, TabsTriggerList }
