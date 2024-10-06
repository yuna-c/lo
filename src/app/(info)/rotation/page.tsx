'use client'
import Head from 'next/head'
import Error from '../error'
import Loading from '@/app/loading'
import { Champion } from '@/lib/types/Champion'
import { useQuery } from '@tanstack/react-query'
import { getChampionRotation } from '@/lib/utils/rotateApi'
import { CardItems } from '@/components/champions/CardItems'

type Props = {
  allPlayers: Champion[]
  newPlayers: Champion[]
}

export default function RotationPage() {
  const { data, isLoading, error, refetch } = useQuery<Props>({
    queryKey: ['championRotation'],
    queryFn: getChampionRotation,
    retry: false
  })

  if (isLoading) {
    return <Loading />
  }

  if (error instanceof Error) {
    return <Error error={error} reset={refetch} />
  }

  // 데이터가 성공적으로 로드되었을 경우 구조 분해
  // 타입 단언을 사용하여 data가 Props임을 보장
  const { allPlayers, newPlayers } = data as Props

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
            {allPlayers.map((champion: Champion) => (
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
            {newPlayers.map((champion: Champion) => (
              <CardItems key={champion.id} champion={champion} />
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
