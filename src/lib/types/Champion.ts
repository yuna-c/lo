// 챔피언 기본 정보를 나타내는 타입
export type Champion = {
  id: string
  key: string
  name: string
  title: string
  image: Image
  blurb: string // 챔피언 설명
  info: {
    attack: number
    defense: number
    magic: number
    difficulty: number
  }
}

// 이미지 정보를 나타내는 타입
export type Image = {
  full: string
  sprite: string
  group: string
  x: number
  y: number
  w: number
  h: number
}

// 챔피언 스킬 정보를 나타내는 타입
export type ChampionSkill = {
  id: string
  key: string
  name: string
  description: string
  image: Image
}

// 챔피언 스킨 정보를 나타내는 타입
export type ChampionSkin = {
  id: string
  name: string
  num: number
  chromas: boolean
}

// 챔피언 상세 정보 API 응답 형태를 나타내는 타입
export type ChampionDetailResponse = {
  type: string
  format: string
  version: string
  data: {
    [key: string]: ChampionDetail
  }
}

// 챔피언 상세 정보를 나타내는 타입 (기본 정보에 추가 정보 포함)
export type ChampionDetail = Champion & {
  lore: string
  skins: ChampionSkin[] // 챔피언의 스킨 목록
  spells: ChampionSkill[] // 챔피언의 스킬 목록
  passive: ChampionPassive
}

// 챔피언 패시브
export type ChampionPassive = {
  name: string
  description: string
  image: Image
}
