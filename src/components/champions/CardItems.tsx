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
  if (!champion && !item) return null

  const isChampion = !!champion
  const data = champion || item

  const imageUrl = isChampion ? `${LoadingImgUrl}/${champion?.id}_0.jpg` : item && version ? (item.image?.full ? itemImgUrl(version, item.image.full) : '/images/lol1.jpg') : ''

  return (
    <ReusableCard
      title={data?.name || ''}
      image={{
        url: imageUrl,
        alt: data?.name || '',
        width: isChampion ? 300 : 60,
        height: isChampion ? 300 : 60
      }}
      options={{
        description: isChampion ? champion?.title : undefined,
        linkUrl: isChampion ? `/champions/${champion?.id}` : undefined,
        titleClass: isChampion ? '' : 'text-sm text-muted-foreground font-normal',
        className
      }}
    />
  )
}
