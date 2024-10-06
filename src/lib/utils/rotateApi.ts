import { Champion } from '@/lib/types/Champion'
import { Rotation } from '@/lib/types/Rotation'
import { fetchChampionsList } from '@/lib/utils/serverApi'

export async function getChampionRotation(): Promise<{
  allPlayers: Champion[]
  newPlayers: Champion[]
}> {
  try {
    // '/api/rotation' 엔드포인트 호출
    const res = await fetch('/api/rotation', {
      method: 'GET',
      cache: 'no-store'
    })

    // 요청 실패 시 에러 던지기
    if (!res.ok) {
      throw new Error(`API 요청 실패: 상태 코드 ${res.status}`)
    }

    // 데이터 추출
    const data: Rotation = await res.json()
    const freeChampionIds: number[] = data.freeChampionIds
    const freeChampionIdsForNewPlayers: number[] = data.freeChampionIdsForNewPlayers

    // 전체 챔피언 데이터 가져오기
    const champions = await fetchChampionsList()

    // 무료 플레이 가능한 챔피언 필터링
    const allPlayers: Champion[] = champions.filter((champion) => freeChampionIds.includes(Number(champion.key)))
    const newPlayers: Champion[] = champions.filter((champion) => freeChampionIdsForNewPlayers.includes(Number(champion.key)))

    // 필터링된 챔피언 데이터 반환
    return {
      allPlayers,
      newPlayers
    }
  } catch (error) {
    console.error('챔피언 로테이션 데이터를 가져오는 중 에러가 발생했습니다.', error)
    throw new Error('챔피언 로테이션 데이터를 가져오는 데 실패했습니다.')
  }
}

// import { Rotation } from '../types/Rotation'
// import { Champion } from '@/lib/types/Champion'
// import { rotateApiUrl } from '@/lib/constants/constants'
// import { fetchChampionsList } from '@/lib/utils/serverApi'

// //SECTION - 챔피언 로테이션 데이터 rotateApi.ts
// export async function getChampionRotation(): Promise<{
//   allPlayers: Champion[]
//   newPlayers: Champion[]
// }> {
//   const res = await fetch('/api/rotation', {
//     method: 'GET',
//     cache: 'no-store'
//   })

//   if (!res.ok) {
//     throw new Error(`API 요청 실패: 상태 코드 ${res.status}`)
//   }

//   const data: Rotation = await res.json()
//   // console.log(data)
//   const freeChampionIds: number[] = data.freeChampionIds
//   const freeChampionIdsForNewPlayers: number[] = data.freeChampionIdsForNewPlayers

//   const champions = await fetchChampionsList()

//   const allPlayers: Champion[] = champions.filter((champion) => freeChampionIds.includes(Number(champion.key)))
//   const newPlayers: Champion[] = champions.filter((champion) => freeChampionIdsForNewPlayers.includes(Number(champion.key)))
//   return {
//     allPlayers,
//     newPlayers
//   }
// }
//SECTION - 로테이션
// '/api/rotation' 엔드포인트에서 무료로 플레이 가능한 챔피언 추출
// export async function fetchRotation(): Promise<Rotation> {
//   const res = await fetch('/api/rotation')

//   if (!res.ok) {
//     throw new Error(`로테이션 정보 요청 실패: 상태 코드 ${res.status}`)
//   }

//   const data: Rotation = await res.json()
//   return data
// }
