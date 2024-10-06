import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="grid justify-items-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
      <article className="flex flex-col gap-10 p-4">
        <div className="txt">
          <h2 className="font-bold">리그 오브 레전드 정보 앱</h2>
          <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
        </div>

        <div className="link">
          <ul className="flex flex-col gap-3 items-center justify-center lg:flex-row ">
            <li>
              <Link href={'/champions'} className="flex flex-col gap-2 items-center justify-center">
                <Image src="/images/lol1.jpg" alt="image" width={450} height={350} priority />
                <p>챔피언 목록 보기</p>
              </Link>
            </li>
            <li>
              <Link href={'/items'} className="flex flex-col gap-2 items-center justify-center">
                <Image src="/images/lol2.jpg" alt="image" width={450} height={350} priority />
                <p>아이템 목록 보기</p>
              </Link>
            </li>
            <li>
              <Link href={'/rotation'} className="flex flex-col gap-2 items-center justify-center">
                <Image src="/images/lol3.jpg" alt="image" width={450} height={350} priority />
                <p>금주 로테이션 확인</p>
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}
