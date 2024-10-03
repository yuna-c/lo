import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'League Of Legends : 챔피언 목록',
  description: 'Riot API를 이용해 리그 오브 레전드의 모든 챔피언 목록을 확인하세요.'
}

export default function DetailPage() {
  return <article className="flex flex-col gap-10 p-4">DetailPage</article>
}
