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
  if (champion) {
    return (
      <ReusableCard
        title={champion.name}
        image={{
          url: `${LoadingImgUrl}/${champion.id}_0.jpg`,
          alt: champion.name,
          width: 300,
          height: 300
        }}
        options={{
          description: champion.title,
          linkUrl: `/champions/${champion.id}`,
          className
        }}
      />
    )
  }
  if (item && version) {
    const itemImageUrl = item.image?.full ? itemImgUrl(version, item.image.full) : '/images/lol1.jpg'

    return (
      <ReusableCard
        title={item.name}
        image={{
          url: itemImageUrl,
          alt: item.name,
          width: 60,
          height: 60
        }}
        options={{
          titleClass: 'text-sm text-muted-foreground font-normal',
          className
        }}
      />
    )
  }
}
