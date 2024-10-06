'use client'
import Head from 'next/head'
import { useEffect } from 'react'
import { Champion } from '@/lib/types/Champion'
import { CardItems } from '@/components/champions/CardItems'
import { useStateStore } from '@/lib/store/zustand'
import Loading from '@/app/loading'

export default function RotationPage() {
  const { loading, setLoading, allChampions, setAllChampions, newChampions, setNewChampions } = useStateStore()

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/rotation')
        if (!res.ok) {
          throw new Error('챔피언 로테이션 데이터를 가져오는 데 실패했어요!')
        }
        const { allPlayers, newPlayers } = await res.json()
        setAllChampions(allPlayers)
        setNewChampions(newPlayers)
      } catch (err) {
        console.error('챔피언 로테이션을 불러오는 데 실패했어요!')
      } finally {
        setLoading(false)
      }
    }

    fetchRotationData()
  }, [setLoading, setAllChampions, setNewChampions])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>금주 로테이션 확인</title>
        <meta name="description" content="Riot Games API를 활용하여 금주 로테이션 정보를 제공합니다." />
        <meta property="og:title" content="금주 로테이션 확인" />
        <meta property="og:description" content="Riot Games API를 활용하여 금주 로테이션 정보를 제공합니다." />
        <meta property="og:url" content="http://localhost:3000/rotation" />
      </Head>

      <article className="flex flex-col gap-16 p-4">
        <div>
          <div className="txt pb-10">
            <h2 className="font-bold">금주 플레이어 로테이션 확인</h2>
            <p>Riot Games API를 활용하여 금주 플레이어 로테이션 정보를 제공합니다.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allChampions.map((champion: Champion) => (
              <CardItems key={champion.id} champion={champion} />
            ))}
          </div>
        </div>

        <div>
          <div className="txt pb-10">
            <h2 className="font-bold">금주 신규 플레이어 로테이션 확인</h2>
            <p>Riot Games API를 활용하여 금주 신규 플레이어 로테이션 정보를 제공합니다.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {newChampions.map((champion: Champion) => (
              <CardItems key={champion.id} champion={champion} />
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
