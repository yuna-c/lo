import { Metadata } from 'next'
import { Champion } from '@/lib/types/Champion'
import Image from 'next/image'
import { fetchVersion } from '@/lib/utils/serverApi'

export const metadata: Metadata = {
  title: '리그 오브 레전드 챔피언 목록',
  description: 'Riot API를 이용해 리그 오브 레전드의 모든 챔피언 목록을 확인하세요.'
}

// 서버 컴포넌트
export default async function ChampionsPage() {
  const versions = await fetchVersion()
  const version = '14.19.1' // 최신 버전을 사용하도록 하드코딩 또는 API 호출로 동적으로 설정
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    { next: { revalidate: 60 } } // ISR 설정을 위해 revalidate 옵션 사용
  )

  if (!res.ok) {
    throw new Error('챔피언 데이터를 가져오는데 실패했습니다.')
  }

  const data = await res.json()

  // 챔피언 목록을 배열로 변환
  const champions: Champion[] = Object.values(data.data)

  return (
    <article className="flex flex-col gap-10 p-4">
      <p>버전: {versions}</p>
      <script>{`console.log('Fetched Version:', ${JSON.stringify(versions)})`}</script>
      <div>
        <h2 className="font-bold">챔피언 목록 보기</h2>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {champions.map((champion) => (
          <li key={champion.key} className="flex flex-col items-center p-4 border rounded">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
              alt={champion.name}
              width={240}
              height={480}
              className="w-full h-auto object-cover rounded-lg"
              quality={100} // 이미지 품질
              priority // 초기 로딩 시 중요한 이미지로 우선 로드
            />
            <h3 className="mt-2 font-bold text-center">{champion.name}</h3>
            <p className="text-sm text-gray-500 text-center">{champion.title}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
