'use client'

import { useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'

export default function Waveform() {
    const waveformRef = useRef<HTMLDivElement>(null)
    const wavesurfer = useRef<WaveSurfer | null>(null)

    useEffect(() => {
        if (!waveformRef.current) return

        wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: 'violet',
            progressColor: 'purple',
            cursorColor: 'navy',
            barWidth: 3,
            barRadius: 3,
            height: 150,
            // Replace with your audio file
            url: '/sample-audio.mp3'
        })

        wavesurfer.current.on('ready', function () {
            if (wavesurfer.current) {
                wavesurfer.current.setVolume(0.5)
            }
        })

        return () => {
            if (wavesurfer.current) {
                wavesurfer.current.destroy()
            }
        }
    }, [])

    const handlePlay = () => {
        if (wavesurfer.current) {
            wavesurfer.current.playPause()
        }
    }

    return (
        <div className="space-y-4">
            <div ref={waveformRef} />
            <button
                onClick={handlePlay}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                aria-label="Play/Pause audio waveform"
            >
                Play / Pause
            </button>
        </div>
    )
}