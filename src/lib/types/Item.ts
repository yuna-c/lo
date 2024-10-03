// 아이템 기본 정보를 나타내는 타입
export type Item = {
  id: string
  name: string
  description: string // 아이템 설명 (HTML 형식)
  plaintext: string // 아이템 설명 (간단한 텍스트)
  into: string[] // 해당 아이템으로 업그레이드되는 아이템 ID 목록
  image: Image // 아이템 이미지 정보
  gold: {
    base: number // 기본 가격
    total: number // 총 가격
    sell: number // 판매 가격
    purchasable: boolean // 구매 가능 여부
  }
  tags: string[] // 아이템 유형 태그 (예: Boots)
}

// 이미지 정보를 나타내는 타입
export type Image = {
  full: string // 이미지 파일 이름
  sprite: string // 스프라이트 이미지 파일 이름
  group: string // 이미지 그룹 정보
  x: number // 스프라이트에서의 x 좌표
  y: number // 스프라이트에서의 y 좌표
  w: number // 이미지의 너비
  h: number // 이미지의 높이
}

// 아이템 목록 응답 형태를 나타내는 타입
export type ItemListResponse = {
  type: string // 데이터 타입
  version: string // 데이터 버전
  data: {
    [key: string]: Item // 아이템 ID를 키로 사용하여 각 아이템 정보를 매핑
  }
}
