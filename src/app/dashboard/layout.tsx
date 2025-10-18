export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex h-full w-[calc(100%-2.5rem)] flex-col items-center gap-10 pb-10'>
      {children}
    </section>
  )
}
