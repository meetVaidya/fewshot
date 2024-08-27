'use client'

import { useEffect, useRef } from 'react'
import { Chart, ChartConfiguration, registerables } from 'chart.js'
import { colorScale } from '@/lib/colorScale'

Chart.register(...registerables)

export default function Spectrogram() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const chartRef = useRef<Chart | null>(null)

    useEffect(() => {
        if (!canvasRef.current) return

        const ctx = canvasRef.current.getContext('2d')
        if (!ctx) return

        // Generate dummy data for the spectrogram
        const generateSpectrogramData = () => {
            const data = []
            for (let i = 0; i < 100; i++) {
                for (let j = 0; j < 100; j++) {
                    data.push({
                        x: i,
                        y: j,
                        v: Math.random() * 100
                    })
                }
            }
            return data
        }

        const data = generateSpectrogramData()

        const config: ChartConfiguration = {
            type: 'scatter',
            data: {
                datasets: [{
                    data: data,
                    pointRadius: 3,
                    pointHoverRadius: 5,
                    showLine: false,
                    backgroundColor: (context: any) => {
                        if (!context.raw) return 'rgba(0,0,0,0)'
                        const value = (context.raw as { v: number }).v
                        return colorScale(value)
                    }
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Time'
                        },
                        min: 0,
                        max: 100
                    },
                    y: {
                        type: 'linear',
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Frequency'
                        },
                        min: 0,
                        max: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const value = (context.raw as { v: number }).v
                                return `Time: ${context.parsed.x}, Frequency: ${context.parsed.y}, Magnitude: ${value.toFixed(2)}`
                            }
                        }
                    }
                }
            }
        }

        chartRef.current = new Chart(ctx, config)

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy()
            }
        }
    }, [])

    return (
        <div className="w-full h-64">
            <canvas ref={canvasRef} aria-label="Audio Spectrogram" role="img"></canvas>
        </div>
    )
}