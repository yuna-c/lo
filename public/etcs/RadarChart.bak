import { Radar } from 'react-chartjs-2'
import { Chart as ChartJS, ChartOptions, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

// 타입 정의
type RadarChartProps = {
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string
      borderColor: string
      borderWidth: number
    }[]
  }
}

const RadarChart: React.FC<RadarChartProps> = ({ data }) => {
  // 레이더 차트의 옵션을 정의합니다.
  //NOTE - 차트 옵션 정의 안해서 에러남
  const options: ChartOptions<'radar'> = {
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2
        }
      }
    },
    plugins: {
      legend: {
        position: 'top'
      }
    }
  }

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Radar data={data} options={options} />
    </div>
  )
}

export default RadarChart
