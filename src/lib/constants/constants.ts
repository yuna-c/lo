export const apiUrl = 'https://ddragon.leagueoflegends.com'
export const rotateApiUrl = 'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations'
export const splashImgUrl = `${apiUrl}/cdn/img/champion/splash`
export const LoadingImgUrl = `${apiUrl}/cdn/img/champion/loading`
// export const dataUrl = (version: string) => `${apiUrl}/cdn/${version}/data/ko_KR`
export const passiveImgUrl = (version: string, passiveImg: string) => `${apiUrl}/cdn/${version}/img/passive/${passiveImg}`
export const spellImgUrl = (version: string, spellImg: string) => `${apiUrl}/cdn/${version}/img/spell/${spellImg}`
