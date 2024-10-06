import { Champion } from '@/lib/types/Champion'
import { Rotation } from '@/lib/types/Rotation'
import { fetchChampionsList } from '@/lib/utils/serverApi'

//SECTION - 엔드 포인트로 rotation 데이터 호출 / 플레이 가능한 챔피언 필터링
export async function getChampionRotation(): Promise<{
  allPlayers: Champion[]
  newPlayers: Champion[]
}> {
  try {
    const res = await fetch('/api/rotation', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!res.ok) {
      throw new Error(`API 요청 실패: 상태 코드 ${res.status}`)
    }

    const data: Rotation = await res.json()
    const freeChampionIds: number[] = data.freeChampionIds
    const freeChampionIdsForNewPlayers: number[] = data.freeChampionIdsForNewPlayers

    const champions = await fetchChampionsList()

    // 무료 플레이 가능한 챔피언 필터링
    const allPlayers: Champion[] = champions.filter((champion) => freeChampionIds.includes(Number(champion.key)))
    const newPlayers: Champion[] = champions.filter((champion) => freeChampionIdsForNewPlayers.includes(Number(champion.key)))

    return {
      allPlayers,
      newPlayers
    }
  } catch (error) {
    console.error('챔피언 로테이션 데이터를 가져오는 중 에러가 발생했습니다.', error)
    throw new Error('챔피언 로테이션 데이터를 가져오는 데 실패했습니다.')
  }
}
