// 챔피언 로테이션 정보를 나타내는 타입
export type Rotation = {
  freeChampionIds: number[] // 무료로 사용할 수 있는 챔피언 ID 목록
  freeChampionIdsForNewPlayers: number[] // 새로운 플레이어를 위한 무료 챔피언 ID 목록
  maxNewPlayerLevel: number
}
