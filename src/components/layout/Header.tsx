import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-3 border-b dark:border-b-white border-b-black border-t-0">
      <h1>
        <Link href="/">
          <Image aria-hidden src="/icons/lol.png" alt="Globe icon" width={24} height={24} className="dark:invert" />
        </Link>
      </h1>
      <Nav />
    </header>
  )
}
