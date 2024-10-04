import { Metadata } from 'next'
import { fetchChampionDetail, fetchVersion } from '@/lib/utils/serverApi'
import { ChampionDetail, ChampionSkill, ChampionSkin } from '@/lib/types/Champion'
import { apiUrl } from '@/lib/constants/constants'
import Image from 'next/image'
import '@/styles/detail.css'

type Props = {
  params: {
    name: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const champion: ChampionDetail = await fetchChampionDetail(params.name)
  return {
    title: `League Of Legends : ${champion.name}`,
    description: `${champion.lore}`
  }
}

export default async function DetailPage({ params }: Props) {
  const version = await fetchVersion()
  const champion: ChampionDetail = await fetchChampionDetail(params.name)

  const keyBoardOrder: string[] = ['Q', 'W', 'E', 'R']
  const spellsWithKeys: ChampionSkill[] = champion.spells.map((spell: ChampionSkill, index: number) => ({
    ...spell,
    key: keyBoardOrder[index] || ''
  }))

  return (
    <article className="relative w-full detail">
      {/* 배경 */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-fixed opacity-80 filter grayscale-[60%]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), 
            url(${apiUrl}/cdn/img/champion/splash/${champion.id}_1.jpg)`
        }}
      ></div>

      {/* 콘텐츠 */}
      <div className="relative m-auto min-h-screen max-w-custom py-8 pb-20 container detail">
        <div className="flex flex-col gap-10 p-4">
          {/* 챔피언 정보 */}
          <h2 className="font-bold">
            <p className="text-base font-normal opacity-80">{champion.title}</p>
            {champion.name}
          </h2>
          <div className="flex flex-col gap-10">
            <div className="image-container">
              <Image src={`${apiUrl}/cdn/img/champion/loading/${champion.id}_0.jpg`} alt={champion.name} width={300} height={300} className="object-cover transform scale-110" quality={100} priority />
            </div>
            <p>{champion.lore}</p>
          </div>

          {/* 챔피언 스탯 */}
          <h2 className="font-bold">스탯</h2>
          <div className="flex flex-row gap-4">
            <p>공격력: {champion.info.attack}</p>
            <p>방어력: {champion.info.defense}</p>
            <p>마법력: {champion.info.magic}</p>
            <p>난이도: {champion.info.difficulty}</p>
          </div>

          {/* 챔피언 스킬 */}
          <h2 className="font-bold">스킬</h2>
          <div className="w-full flex justify-start -ml-3">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              <div className="skill-icon-container">
                <Image src={`${apiUrl}/cdn/${version}/img/passive/${champion.passive.image.full}`} width={50} height={50} alt={champion.passive.name || ''} className="rounded-sm" />
                <p className="mt-2 text-sm text-center">
                  {champion.passive.name}
                  <br />
                  (P)
                </p>
              </div>

              {spellsWithKeys.map((spell: ChampionSkill) => (
                <div key={spell.id} className="skill-icon-container">
                  <Image src={`${apiUrl}/cdn/${version}/img/spell/${spell.image.full}`} alt={spell.name} width={50} height={50} priority className="object-cover rounded-sm" />
                  <p className="mt-2 text-sm text-center">
                    {spell.name} <br />({spell.key})
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 챔피언 스킨 */}
          <h2 className="font-bold">스킨</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {champion.skins.map((skin: ChampionSkin) => (
              <div key={skin.id}>
                <Image src={`${apiUrl}/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`} alt={skin.name} width={300} height={170} priority className="object-cover rounded-lg" />
                <p className="mt-2">{skin.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
