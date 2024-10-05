'use client'
import { useState, useEffect } from 'react'
import { Champion } from '@/lib/types/Champion'
import { CardItems } from '@/components/champions/CardItems'
import Loading from '@/app/loading'

export default function RotationPage() {
  // useEffect(() => {
  //   throw new Error('의도된 로테이션 페이지 에러')
  // }, [])

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
        {rotationChampions.map((champion: Champion) => (
          <CardItems key={champion.id} champion={champion} />
        ))}
      </div>
    </article>
  )
}
