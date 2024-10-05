'use client'
import { useState, useEffect } from 'react'
import { Champion } from '@/lib/types/Champion'
import { LoadingImgUrl } from '@/lib/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import Loading from '@/app/loading'

// client 컴포넌트는 서버에서 실행되는 정적 메타데이터(metadata)를 지원하지 않기 때문에 오류가 발생
// export const metadata = {
//   title: 'League Of Legends : 금주의 무료 챔피언',
//   description: 'Riot API를 이용해 리그 오브 레전드의 금주의 무료 챔피언 목록을 확인하세요.',
//   openGraph: {
//     title: 'League Of Legends : 금주의 무료 챔피언',
//     description: 'Riot API를 이용해 리그 오브 레전드의 금주의 무료 챔피언 목록을 확인하세요.',
//     url: 'http://localhost:3000/rotation'
//   }
// }

export default function RotationPage() {
  const [rotationChampions, setRotationChampions] = useState<Champion[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/rotation')
        if (!res.ok) {
          throw new Error('챔피언 로테이션 데이터를 가져오는 데 실패했어요!')
        }
        const data: Champion[] = await res.json()
        setRotationChampions(data)
      } catch (err) {
        setError('챔피언 로테이션을 불러오는 데 실패했어요!')
      } finally {
        setLoading(false)
      }
    }

    fetchRotationData()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <article className="flex flex-col gap-10 p-4">
      <div className="txt">
        <h2 className="font-bold">금주 로테이션 확인</h2>
        <p>Riot Games API를 활용하여 금주 로테이션 정보를 제공합니다.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {rotationChampions.map((champion) => (
          <Link key={champion.id} href={`/champions/${champion.id}`}>
            <div className="w-1/2 h-1/2">
              <Image src={`${LoadingImgUrl}/${champion.id}_0.jpg`} alt={champion.name} width={200} height={200} className="object-cover transform scale-110" quality={100} priority />
              <p className="text-center mt-2">{champion.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </article>
  )
}
