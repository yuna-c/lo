import { NextResponse } from 'next/server'
import { getChampionRotation } from '@/lib/utils/rotateApi'

//SECTION - 챔피언 로테이션 API 엔드포인트(sever Action)
export async function GET() {
  try {
    const rotationChampions = await getChampionRotation()
    return NextResponse.json(rotationChampions)
  } catch (error) {
    console.error('API 요청 중 에러가 발생 했어요!', error)
    return NextResponse.json({ error: '챔피언 로테이션 데이터를 가져오는 데 실패했습니다.' }, { status: 500 })
  }
}
