'use client'

import { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { SkillData } from '@/content/site'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

interface SkillsChartProps {
  skills: SkillData[]
}

export function SkillsChart({ skills }: SkillsChartProps) {
  const chartRef = useRef<ChartJS<'radar'>>(null)

  const data = {
    labels: skills.map(skill => skill.label),
    datasets: [
      {
        label: 'Skills',
        data: skills.map(skill => skill.value),
        backgroundColor: 'rgba(0, 209, 178, 0.1)',
        borderColor: 'rgba(0, 209, 178, 0.8)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(0, 209, 178, 1)',
        pointBorderColor: 'rgba(0, 209, 178, 1)',
        pointHoverBackgroundColor: 'rgba(0, 209, 178, 1)',
        pointHoverBorderColor: 'rgba(0, 209, 178, 1)',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(17, 22, 29, 0.9)',
        titleColor: '#E6EAF0',
        bodyColor: '#A9B1BD',
        borderColor: 'rgba(0, 209, 178, 0.3)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed.r}%`
          }
        }
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        min: 0,
        ticks: {
          stepSize: 20,
          color: 'rgba(169, 177, 189, 0.5)',
          font: {
            size: 10,
          },
          backdropColor: 'transparent',
        },
        grid: {
          color: 'rgba(169, 177, 189, 0.2)',
        },
        angleLines: {
          color: 'rgba(169, 177, 189, 0.2)',
        },
        pointLabels: {
          color: '#E6EAF0',
          font: {
            size: 12,
            weight: 500,
          },
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart' as const,
    },
  }

  return (
    <div className="w-full h-80 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <Radar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  )
}