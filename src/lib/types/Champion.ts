// 챔피언 기본 정보를 나타내는 타입
export type Champion = {
  id: string // 챔피언 ID
  key: number // 챔피언 고유 키
  name: string // 챔피언 이름
  title: string // 챔피언 직함
  blurb: string // 챔피언 설명 (간단한 이야기)
  info: {
    attack: number // 공격력
    defense: number // 방어력
    magic: number // 마법력
    difficulty: number // 난이도
  }
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

// 챔피언 스킬 정보를 나타내는 타입
export type ChampionSkill = {
  id: string // 스킬 ID
  name: string // 스킬 이름
  description: string // 스킬 설명
}

// 챔피언 스킨 정보를 나타내는 타입
export type ChampionSkin = {
  id: string // 스킨 ID
  name: string // 스킨 이름
  num: number // 스킨 번호
  chromas: boolean // 크로마 여부 (true일 경우 크로마 존재)
}

// 챔피언 상세 정보를 나타내는 타입 (기본 정보에 추가 정보 포함)
export type ChampionDetail = Champion & {
  lore: string // 챔피언 배경 이야기
  skins: ChampionSkin[] // 챔피언의 스킨 목록
  spells: ChampionSkill[] // 챔피언의 스킬 목록
  passive: {
    name: string // 패시브 스킬 이름
    description: string // 패시브 스킬 설명
    image: Image // 패시브 스킬 아이콘 이미지
  }
  splash: Image // 챔피언 배경화면 이미지
}

// 챔피언 상세 정보 API 응답 형태를 나타내는 타입
export type ChampionDetailResponse = {
  type: string // 데이터 타입
  format: string // 응답 형식
  version: string // 데이터 버전
  data: ChampionDetail // 챔피언 상세 데이터
}
