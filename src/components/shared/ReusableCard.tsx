import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

type Props = {
  title: string
  description?: string
  imageUrl: string
  linkUrl?: string
  footerContent?: React.ReactNode
  buttonLabel?: string
  buttonUrl?: string
}

export function ReusableCard({ title, description, imageUrl, linkUrl, footerContent, buttonLabel, buttonUrl }: Props) {
  const cardContent = (
    <Card className="p-3 md:p-5">
      <CardHeader className="p-0 pb-4">
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent className="p-0">
        <div className="flex justify-center items-start overflow-hidden max-h-[250px]">
          <Image src={imageUrl} alt={title} width={300} height={300} className="object-cover transform scale-110" quality={100} priority />
        </div>
      </CardContent>

      {(footerContent || buttonLabel) && (
        <CardFooter>
          {footerContent}
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
