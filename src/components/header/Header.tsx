import Link from 'next/link'
import Image from 'next/image'
import Nav from '../nav/Nav'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-3 border border-b-black border-t-0">
      <h1>
        <Link href="/">
          <Image aria-hidden src="https://nextjs.org/icons/globe.svg" alt="Globe icon" width={16} height={16} />
        </Link>
      </h1>
      <Nav />
    </header>
  )
}
