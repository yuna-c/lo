import type { Metadata } from 'next'
import '@/styles/globals.css'
import localFont from 'next/font/local'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Providers from '@/lib/providers/RQProvider'

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard'
})

export const metadata: Metadata = {
  title: 'League Of Legends',
  description: 'Riot API를 활용한 리그 오브 레전드 정보 앱 만들기'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <link rel="icon" href="/icons/lol.png" sizes="any" />
      <body className={`${pretendard.variable} antialiased`}>
        <div className="wrap">
          <Header />
          <Providers>
            <main>{children} </main>
          </Providers>
          <Footer />
        </div>
      </body>
    </html>
  )
}
