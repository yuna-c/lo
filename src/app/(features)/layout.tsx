export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <section className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20">{children}</section>
}
