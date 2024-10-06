import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

type ImageProps = {
  url: string
  width?: number
  height?: number
  alt: string
}

type CardOptions = {
  description?: string
  linkUrl?: string
  buttonLabel?: string
  buttonUrl?: string
  className?: string
  titleClass?: string
  children?: React.ReactNode
}

type Props = {
  title: string
  image: ImageProps
  options?: CardOptions
}

export function ReusableCard({ title, image, options = {} }: Props) {
  const { description, linkUrl, buttonLabel, buttonUrl, className = '', titleClass = '', children } = options

  const cardContent = (
    <Card className={`p-3 md:p-5 ${className}`}>
      <CardHeader className="p-0 pb-4">
        <CardTitle className={titleClass}>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent className="p-0">
        <div className="flex justify-center items-start overflow-hidden" style={{ maxHeight: `${image.height}px` }}>
          <Image src={image.url} alt={image.alt} width={image.width} height={image.height} className="object-cover transform scale-110" priority />
        </div>
      </CardContent>

      {(children || buttonLabel) && (
        <CardFooter>
          {children}
          {buttonLabel && buttonUrl && (
            <Link href={buttonUrl} passHref>
              <Button className="ml-4 mt-2">{buttonLabel}</Button>
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  )

  return linkUrl ? <Link href={linkUrl}>{cardContent}</Link> : cardContent
}
