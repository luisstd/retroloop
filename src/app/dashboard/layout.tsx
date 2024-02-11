export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <section className='flex h-full w-full flex-col items-center gap-10'>{children}</section>
}
