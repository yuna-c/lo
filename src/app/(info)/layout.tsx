export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <section className="grid justify-items-center min-h-screen py-8 pb-20 m-auto max-w-custom">{children}</section>
}
