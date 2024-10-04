'use server'
import { apiUrl } from '@/lib/constants/constants'
import { Champion, ChampionDetail, ChampionDetailResponse } from '@/lib/types/Champion'

//SECTION - API의 버전 정보
export async function fetchVersion(): Promise<string> {
  const res = await fetch(`${apiUrl}/api/versions.json`, {
    method: 'GET'
  })

  if (!res.ok) {
    throw new Error(`버전 정보 요청 실패: 상태 코드 ${res.status}`)
  }

  const data: string[] = await res.json()
  const version = data[0]
  return version
}

//SECTION - 챔피언 목록 : ISR
export async function fetchChampionsList(): Promise<Champion[]> {
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
export async function fetchChampionDetail(name: string): Promise<ChampionDetail> {
  const version = await fetchVersion()
  const res = await fetch(`${apiUrl}/cdn/${version}/data/ko_KR/champion/${name}.json`)

  if (!res.ok) {
    throw new Error(`챔피언 정보 요청 실패: 상태 코드 ${res.status}`)
  }

  const data: ChampionDetailResponse = await res.json()
  const championDetail = data.data[name]
  return championDetail
}
