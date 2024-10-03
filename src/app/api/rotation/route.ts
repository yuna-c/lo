import { Rotation } from '@/lib/types/Rotation'
import { NextResponse } from 'next/server'

export async function GET() {
  //NOTE - Type Assertion 타입 단언
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY
  const apiUrl = process.env.NEXT_PUBLIC_RIOT_ROTATE_API_URL
  // console.log('API URL:', apiUrl, 'API Key:', apiKey)

  if (!apiKey || !apiUrl) {
    return NextResponse.json({ error: 'API KEY 또는 URL이 설정되지 않았어요.' }, { status: 500 })
  }

  try {
    const res = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Riot-Token': apiKey
      },
      //NOTE - 최신 API
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error(`API 요청 실패: 상태 코드 ${res.status}`)
    }

    const data: Rotation[] = await res.json()
    console.log('챔피언 로테이션 정보 :', data)
    return NextResponse.json(data)
  } catch (error) {
    console.error('데이터 패치 중 에러가 발생 했어요!', error)
    return NextResponse.json({ error: '챔피언 정보를 가지고 오는데 실패 했어요!' }, { status: 500 })
  }
}
