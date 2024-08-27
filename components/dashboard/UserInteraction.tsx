import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function UserInteraction() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Annotation Toolbar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                        <Input placeholder="Start time" />
                        <Input placeholder="End time" />
                    </div>
                    <Input placeholder="Add new keyword" />
                    <div className="flex space-x-2">
                        <Button>Mark Segment</Button>
                        <Button variant="outline">Add Keyword</Button>
                    </div>
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Transcription</CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea placeholder="Transcription will appear here..." className="h-[200px]" />
                </CardContent>
            </Card>
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Report Generation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                        <Button>Generate CSV</Button>
                        <Button>Generate PDF</Button>
                    </div>
                    <Input placeholder="Search keywords or segments" />
                </CardContent>
            </Card>
        </div>
    )
}