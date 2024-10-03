'use server'
import { apiUrl } from '../constants/constants'
import { Champion } from '../types/Champion'

//SECTION - API의 버전 정보
export async function fetchVersion(): Promise<string> {
  try {
    const res = await fetch(`${apiUrl}/api/versions.json`, {
      method: 'GET'
    })

    if (!res.ok) {
      throw new Error(`버전 정보 요청 실패: 상태 코드 ${res.status}`)
    }

    const data: string[] = await res.json()
    const version = data[0]
    return version
  } catch (error) {
    console.error('버전을 가져오지 못했어요!', error)
    throw new Error('버전 정보를 가져오는 도중 에러가 발생했어요!')
  }
}

//SECTION - 챔피언 목록
export async function fetchChampionsList() {
  const version = await fetchVersion()
  const res = await fetch(`${apiUrl}/cdn/${version}/data/ko_KR/champion.json`, {
    next: {
      revalidate: 86400
    }
  })

  if (!res.ok) {
    throw new Error(`챔피언 목록 요청 실패: 상태 코드 ${res.status}`)
  }
  const data = await res.json()
  const champions: Champion[] = Object.values(data.data)
  return champions
}

//SECTION - 특정 챔피언 상세 정보
//SECTION - 아이템 목록
