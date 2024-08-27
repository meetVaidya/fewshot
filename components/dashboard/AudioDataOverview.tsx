import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import AudioPlayer from "../audio/AudioPlayer"
import Spectrogram from "../audio/Spectrogram"
import Waveform from "../audio/Waveform"
import { audioData, audioClips } from "@/lib/dummy-data"

export default function AudioDataOverview() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>File Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <dl className="grid grid-cols-2 gap-2">
                        <dt>File Name:</dt>
                        <dd>{audioData.fileName}</dd>
                        <dt>Format:</dt>
                        <dd>{audioData.format}</dd>
                        <dt>Duration:</dt>
                        <dd>{audioData.duration}</dd>
                        <dt>Sample Rate:</dt>
                        <dd>{audioData.sampleRate}</dd>
                        <dt>Channels:</dt>
                        <dd>{audioData.channels}</dd>
                        <dt>Bitrate:</dt>
                        <dd>{audioData.bitrate}</dd>
                        <dt>Source:</dt>
                        <dd>{audioData.source}</dd>
                        <dt>Speaker:</dt>
                        <dd>{audioData.speaker}</dd>
                        <dt>Date:</dt>
                        <dd>{audioData.date}</dd>
                    </dl>
                    <AudioPlayer />
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Spectrogram</CardTitle>
                </CardHeader>
                <CardContent>
                    <Spectrogram />
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Waveform</CardTitle>
                </CardHeader>
                <CardContent>
                    <Waveform />
                </CardContent>
            </Card>
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Audio Clips</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Segment</TableHead>
                                <TableHead>Start Time</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {audioClips.map((clip, index) => (
                                <TableRow key={index}>
                                    <TableCell>{clip.segment}</TableCell>
                                    <TableCell>{clip.startTime}</TableCell>
                                    <TableCell>{clip.duration}</TableCell>
                                    <TableCell>
                                        <button className="px-2 py-1 text-sm bg-primary text-primary-foreground rounded">Play</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}