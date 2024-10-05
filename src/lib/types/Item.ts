import { Image } from './Champion'

// 아이템 기본 정보를 나타내는 타입
export type Item = {
  id: string
  name: string
  description: string // 아이템 설명 (HTML 형식)
  plaintext: string // 아이템 설명 (간단한 텍스트)
  into: string[] // 해당 아이템으로 업그레이드되는 아이템 ID 목록
  image: Image
  gold: {
    base: number
    total: number
    sell: number
    purchasable: boolean
  }
  tags: string[] // 아이템 유형 태그 (예: Boots)
}

// 아이템 목록 응답 형태를 나타내는 타입
export type ItemListResponse = {
  type: string
  version: string
  data: {
    [key: string]: Item
  }
}
