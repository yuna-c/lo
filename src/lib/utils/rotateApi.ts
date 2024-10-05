'use server'
import { Champion } from '@/lib/types/Champion'
import { fetchChampionsList } from '@/lib/utils/serverApi'
import { rotateApiUrl } from '@/lib/constants/constants'

//SECTION - 챔피언 로테이션 데이터
export async function getChampionRotation(): Promise<Champion[]> {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY as string

  if (!apiKey || !rotateApiUrl) {
    throw new Error('API 요청 중 에러가 발생 했어요!')
  }

  const res = await fetch(rotateApiUrl, {
    method: 'GET',
    headers: {
      'X-Riot-Token': apiKey
    },
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error(`API 요청 실패: 상태 코드 ${res.status}`)
  }

  const result = await res.json()
  const freeChampionIds: number[] = result.freeChampionIds
  const champions = await fetchChampionsList()
  return champions.filter((champion) => freeChampionIds.includes(Number(champion.key)))
}
