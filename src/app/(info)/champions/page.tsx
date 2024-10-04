import { Metadata } from 'next'
import { fetchChampionsList } from '@/lib/utils/serverApi'
import { CardItems } from '@/components/champions/CardItems'

export const metadata: Metadata = {
  title: 'League Of Legends : 챔피언 목록',
  description: 'Riot API를 이용해 리그 오브 레전드의 모든 챔피언 목록을 확인하세요.'
}

// 서버 컴포넌트
export default async function ChampionsPage() {
  const championList = await fetchChampionsList()

  return (
    <article className="flex flex-col gap-10 p-4">
      <div className="txt">
        <h2 className="font-bold">챔피언 목록 보기</h2>
        <p>Riot Games API를 활용하여 챔피언 정보를 제공합니다.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {championList?.map((champion) => (
          <CardItems key={champion.id} champion={champion} />
        ))}
      </div>
    </article>
  )
}
