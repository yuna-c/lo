'use client'
import Loading from '@/app/loading'
import { Rotation } from '@/lib/types/Rotation'
import { useEffect, useState } from 'react'

export default function RotationPage() {
  const [rotationData, setRotationData] = useState<Rotation | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/rotation')
        if (!res.ok) throw new Error('데이터를 가져오는데 실패했습니다.')
        const data: Rotation = await res.json()
        setRotationData(data)
      } catch (err) {
        setError(String(err))
      } finally {
        setLoading(false)
      }
    }

    fetchRotationData()
  }, [])

  if (loading) return <Loading />
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <article className="flex flex-col gap-10 p-4">
      <div>
        <h2 className="font-bold">금주 로테이션 확인</h2>
      </div>
      <ul>
        {rotationData?.freeChampionIds.map((id) => (
          <li key={id}>챔피언 ID: {id}</li>
        ))}
      </ul>
    </article>
  )
}
