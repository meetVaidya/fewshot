export const audioData = {
    fileName: "sample_audio.mp3",
    format: "MP3",
    duration: "3:45",
    sampleRate: "44.1 kHz",
    channels: 2,
    bitrate: "320 kbps",
    source: "Recording Studio A",
    speaker: "John Doe",
    date: "2023-06-15",
}

export const audioClips = [
    { segment: "Intro", startTime: "0:00", duration: "0:30" },
    { segment: "Verse 1", startTime: "0:30", duration: "1:00" },
    { segment: "Chorus", startTime: "1:30", duration: "0:45" },
    // Add more clips as needed
]

export const keywords = [
    { word: "example", frequency: 5, timestamp: "0:15, 1:20, 2:10", sentiment: "Neutral" },
    { word: "important", frequency: 3, timestamp: "0:45, 2:30", sentiment: "Positive" },
    // Add more keywords as needed
]

export const keywordSentiment = [
    { sentiment: "Positive", value: 60 },
    { sentiment: "Neutral", value: 30 },
    { sentiment: "Negative", value: 10 },
]

export const modelPerformance = [
    { metric: "Accuracy", value: 85 },
    { metric: "Precision", value: 80 },
    { metric: "Recall", value: 75 },
    { metric: "F1 Score", value: 77 },
]