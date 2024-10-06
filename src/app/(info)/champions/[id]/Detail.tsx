'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { LoadingImgUrl, splashImgUrl, passiveImgUrl, spellImgUrl } from '@/lib/constants/constants'
import { ChampionDetail, ChampionSkill, ChampionSkin } from '@/lib/types/Champion'
import { ModalItems } from '@/components/champions/ModalItems'
import Loading from '@/app/loading'
import '@/styles/detail.css'

type Props = {
  champion: ChampionDetail
  version: string
}

export default function Detail({ champion, version }: Props) {
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedSkin, setSelectedSkin] = useState<ChampionSkin | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const keyBoard: string[] = ['Q', 'W', 'E', 'R']
  const spellsWithKeys: ChampionSkill[] = champion.spells.map((spell: ChampionSkill, index: number) => ({
    ...spell,
    key: keyBoard[index] || ''
  }))

  const openModal = (skin: ChampionSkin) => {
    setSelectedSkin(skin)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedSkin(null)
    setIsModalOpen(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [champion])

  if (loading) return <Loading />

  return (
    <article className="relative w-full detail">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-fixed opacity-80 filter grayscale-[60%]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), 
            url(${splashImgUrl}/${champion.id}_1.jpg)`
        }}
      ></div>

      <div className="relative m-auto min-h-screen max-w-custom py-8 pb-20 container detail">
        <div className="flex flex-col gap-10 p-4">
          {/* 챔피언 정보 */}
          <h2 className="font-bold">
            <p className="text-base font-normal opacity-80">{champion.title}</p>
            {champion.name}
          </h2>
          <div className="flex flex-col gap-10">
            <div className="image-container">
              <Image src={`${LoadingImgUrl}/${champion.id}_0.jpg`} alt={champion.name} width={300} height={300} className="object-cover transform scale-110" quality={100} priority />
            </div>
            <p>{champion.lore}</p>
          </div>

          {/* 챔피언 스탯 */}
          <h2 className="font-bold">스탯</h2>
          <div className="flex flex-row gap-4">
            <p>공격력: {champion.info.attack !== 0 ? champion.info.attack : 6}</p>
            <p>방어력: {champion.info.defense !== 0 ? champion.info.defense : 2}</p>
            <p>마법력: {champion.info.magic !== 0 ? champion.info.magic : 4}</p>
            <p>난이도: {champion.info.difficulty !== 0 ? champion.info.difficulty : 5}</p>
          </div>

          {/* 챔피언 스킬 */}
          <h2 className="font-bold">스킬</h2>
          <div className="w-full flex justify-start md:-ml-2">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              <div className="skill-icon-container">
                <Image src={passiveImgUrl(version, champion.passive.image.full)} width={50} height={50} alt={champion.passive.name || ''} className="rounded-sm" />
                <p className="mt-2 text-sm text-center">
                  {champion.passive.name}
                  <br />
                  (P)
                </p>
              </div>

              {spellsWithKeys.map((spell: ChampionSkill) => (
                <div key={spell.id} className="skill-icon-container">
                  <Image src={spellImgUrl(version, spell.image.full)} alt={spell.name} width={50} height={50} priority className="object-cover rounded-sm" />
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
              <div key={skin.id} onClick={() => openModal(skin)} className="cursor-pointer">
                <Image src={`${splashImgUrl}/${champion.id}_${skin.num}.jpg`} alt={skin.name} width={260} height={154} priority className="object-cover rounded-lg" />
                <p className="mt-2">{skin.name}</p>
              </div>
            ))}
          </div>

          <ModalItems selectedSkin={selectedSkin} isOpen={isModalOpen} onClose={closeModal} champion={champion} />
        </div>
      </div>
    </article>
  )
}
