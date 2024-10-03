import React from 'react'
import { PolarArea } from 'react-chartjs-2'
import { Chart as ChartJS, ChartOptions, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

// 타입 정의
type PolarAreaChartProps = {
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string[]
      borderColor: string[]
      borderWidth: number
    }[]
  }
}

// function을 사용하여 PolarAreaChart 컴포넌트 정의
export default function PolarAreaChart({ data }: PolarAreaChartProps) {
  // 폴라 에어리어 차트의 옵션 정의
  const options: ChartOptions<'polarArea'> = {
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          stepSize: 2,
          color: '#333', // 눈금 라벨의 색상
          font: {
            size: 12,
            weight: 600,
            family: 'Pretendard, Arial, sans-serif'
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#444', // 범례 텍스트 색상
          font: {
            size: 14,
            weight: 600
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(34, 202, 236, 0.8)', // 툴팁 배경 색상
        bodyFont: {
          size: 12
        },
        bodyColor: '#fff',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 1
      }
    }
  }

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <PolarArea data={data} options={options} />
    </div>
  )
}
