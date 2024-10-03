'use server'
import { RIOT_API_URL } from '../constants/constants'

export async function fetchVersion(): Promise<string> {
  const apiUrl = RIOT_API_URL

  try {
    const res = await fetch(`${apiUrl}/api/versions.json`, {
      method: 'GET',
      cache: 'force-cache' //NOTE - 자주 바뀌지 않는 데이터
    })

    if (!res.ok) {
      throw new Error(`버전 정보 요청 실패: 상태 코드 ${res.status}`)
    }

    const data = await res.json()
    const version = data[0]
    return version
  } catch (error) {
    console.error('버전을 가져오지 못했어요!', error)
    throw new Error('버전 정보를 가져오는 도중 에러가 발생했어요!')
  }
}
