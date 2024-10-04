import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { apiUrl } from '@/lib/constants/constants'
import Link from 'next/link'
import Image from 'next/image'
import { Champion } from '@/lib/types/Champion'

export function CardItems({ champion }: { champion: Champion }) {
  if (!champion) return null

  return (
    <Link href={`/champions/${champion.id}`}>
      <Card className="p-3  md:p-5">
        <CardHeader className="p-0 pb-4">
          <CardTitle>{champion.name}</CardTitle>
          <CardDescription>{champion.title}</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex justify-center items-start overflow-hidden max-h-[250px]">
            <Image src={`${apiUrl}/cdn/img/champion/loading/${champion.id}_0.jpg`} alt={champion.name} width={300} height={300} className="object-cover transform scale-110" quality={100} priority />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
