'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const setAudioData = () => {
            setDuration(audio.duration)
            setCurrentTime(audio.currentTime)
        }

        const setAudioTime = () => setCurrentTime(audio.currentTime)

        audio.addEventListener('loadeddata', setAudioData)
        audio.addEventListener('timeupdate', setAudioTime)

        return () => {
            audio.removeEventListener('loadeddata', setAudioData)
            audio.removeEventListener('timeupdate', setAudioTime)
        }
    }, [])

    const togglePlayPause = () => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) {
            audio.pause()
        } else {
            audio.play()
        }
        setIsPlaying(!isPlaying)
    }

    const skipBackward = () => {
        const audio = audioRef.current
        if (audio) audio.currentTime -= 10
    }

    const skipForward = () => {
        const audio = audioRef.current
        if (audio) audio.currentTime += 10
    }

    const handleSliderChange = (value: number[]) => {
        const audio = audioRef.current
        if (audio) {
            audio.currentTime = value[0]
            setCurrentTime(value[0])
        }
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    return (
        <div className="space-y-2">
            <audio ref={audioRef} src="/sample-audio.mp3" />
            <div className="flex items-center justify-center space-x-2">
                <Button variant="outline" size="icon" onClick={skipBackward} aria-label="Skip backward 10 seconds">
                    <SkipBack className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={togglePlayPause} aria-label={isPlaying ? 'Pause' : 'Play'}>
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button variant="outline" size="icon" onClick={skipForward} aria-label="Skip forward 10 seconds">
                    <SkipForward className="h-4 w-4" />
                </Button>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-sm">{formatTime(currentTime)}</span>
                <Slider
                    value={[currentTime]}
                    max={duration}
                    step={1}
                    onValueChange={handleSliderChange}
                    aria-label="Seek audio"
                />
                <span className="text-sm">{formatTime(duration)}</span>
            </div>
        </div>
    )
}