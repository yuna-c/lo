import { Metadata } from 'next'
import { fetchChampionDetail, fetchVersion } from '@/lib/utils/serverApi'
import { ChampionDetail } from '@/lib/types/Champion'
import ClientPage from './ClientPage'

type Props = {
  params: {
    name: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const champion: ChampionDetail = await fetchChampionDetail(params.name)
  return {
    title: `League Of Legends : ${champion.name}`,
    description: `${champion.lore}`
  }
}

export default async function DetailPage({ params }: Props) {
  const version = await fetchVersion()
  const champion: ChampionDetail = await fetchChampionDetail(params.name)

  return <ClientPage champion={champion} version={version} />
}
