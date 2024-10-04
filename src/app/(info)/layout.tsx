'use client'
import { usePathname } from 'next/navigation'

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isDetailPage = pathname.includes('/champions/')

  return <section className={`grid justify-items-center min-h-screen m-auto ${!isDetailPage ? 'py-8 pb-20 max-w-custom container' : ''}`}>{children}</section>
}
