import { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from '@/app/loading'
import { ChampionDetail } from '@/lib/types/Champion'
import { fetchChampionDetail, fetchVersion } from '@/lib/utils/serverApi'
import Detail from './Detail'

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const champion: ChampionDetail = await fetchChampionDetail(params.id)
  return {
    title: `League Of Legends : ${champion.name}`,
    description: `${champion.lore}`,
    openGraph: {
      title: `League Of Legends : ${champion.name}`,
      description: `${champion.lore}`,
      url: `http://localhost:3000/champions/${params.id}`
    }
  }
}

export default async function DetailPage({ params }: Props) {
  const version: string = await fetchVersion()
  const champion: ChampionDetail = await fetchChampionDetail(params.id)

  return (
    <Suspense fallback={<Loading />}>
      <Detail champion={champion} version={version} />
    </Suspense>
  )
}
