import { ReusableCard } from '../shared/ReusableCard'
import { LoadingImgUrl, itemImgUrl } from '@/lib/constants/constants'
import { Champion } from '@/lib/types/Champion'
import { Item } from '@/lib/types/Item'

type CardItemsProps = {
  champion?: Champion
  item?: Item
  version?: string
  className?: string
}

export function CardItems({ champion, item, version, className = '' }: CardItemsProps) {
  if (!champion && !item && !version) return null
  const versionToUse = version || '14.19.1'

  if (champion) {
    return <ReusableCard title={champion.name} description={champion.title} imageUrl={`${LoadingImgUrl}/${champion.id}_0.jpg`} linkUrl={`/champions/${champion.id}`} />
  }

  if (item) {
    const itemImageUrl = item.image?.full ? itemImgUrl(versionToUse, item.image.full) : '../../../public/images/lol1.jpg'
    return <ReusableCard title={item.name} imageUrl={itemImageUrl} imageWidth={60} imageHeight={60} className={className} />
  }
}
