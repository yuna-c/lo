import { ReusableCard } from '../shared/ReusableCard'
import { apiUrl } from '@/lib/constants/constants'
import { Champion } from '@/lib/types/Champion'

export function CardItems({ champion }: { champion: Champion }) {
  if (!champion) return null

  return (
    <ReusableCard
      title={champion.name}
      description={champion.title}
      imageUrl={`${apiUrl}/cdn/img/champion/loading/${champion.id}_0.jpg`}
      linkUrl={`/champions/${champion.id}`}
      // buttonLabel="챔피언 정보 보기"
      // buttonUrl={`/champions/${champion.id}`}
    />
  )
}
