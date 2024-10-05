'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useEffect, startTransition } from 'react'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  const router = useRouter()

  return (
    <section className="flex items-center justify-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
      <article className="flex flex-col items-center gap-6 p-4">
        <div className="txt">
          <h2 className="font-bold">예기치 않은 오류가 발생했습니다!</h2>
          <p className="mt-8">{error.message}</p>
        </div>

        <Button
          onClick={() =>
            startTransition(() => {
              router.refresh()
              reset()
            })
          }
        >
          다시 시도하기
        </Button>
      </article>
    </section>
  )
}
