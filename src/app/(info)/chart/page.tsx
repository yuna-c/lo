'use client'
import PolarAreaChart from '@/components/shared/PolarAreaChart'
import { Champion } from '@/lib/types/Champion'

export default function ChartPage() {
  // 챔피언 데이터를 정의
  const champion: Champion = {
    id: 'XinZhao', // 챔피언 ID
    key: 5, // 챔피언 고유 키
    name: '신 짜오', // 챔피언 이름
    title: '데마시아의 호위무사', // 챔피언 직함
    blurb: '신 짜오는 데마시아를 통치하는 라이트실드 왕조에 충성을 바치는 결의에 가득 찬 전사이다.', // 챔피언 설명
    info: {
      attack: 8,
      defense: 6,
      magic: 3,
      difficulty: 2
    }
  }

  // 폴라 에어리어 차트에 사용할 데이터
  const data = {
    labels: ['Attack', 'Defense', 'Magic', 'Difficulty'],
    datasets: [
      {
        label: `${champion.name} Stats`,
        data: [champion.info.attack, champion.info.defense, champion.info.magic, champion.info.difficulty], // 챔피언 스탯 데이터 사용
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1
      }
    ]
  }

  return (
    <div className="flex flex-col gap-10">
      <h2 className="font-bold">폴라 에어리어 차트 - {champion.name} 스탯</h2>
      <PolarAreaChart data={data} />
    </div>
  )
}
