'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { modelPerformance } from "@/lib/dummy-data"

export default function FewShotLearning() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Model Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <BarChart width={600} height={300} data={modelPerformance}>
                        <XAxis dataKey="metric" />
                        <YAxis />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#000" radius={4} />
                    </BarChart>
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Confusion Matrix</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 bg-muted flex items-center justify-center">
                        Confusion Matrix Visualization
                    </div>
                </CardContent>
            </Card>
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Model Customization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Threshold</label>
                        <Slider defaultValue={[0.5]} max={1} step={0.01} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Number of Keywords</label>
                        <Slider defaultValue={[10]} max={50} step={1} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Model Selection</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select model" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="model1">Model 1</SelectItem>
                                <SelectItem value="model2">Model 2</SelectItem>
                                <SelectItem value="model3">Model 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button>Re-run Analysis</Button>
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Precision-Recall Curve</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 bg-muted flex items-center justify-center">
                        Precision-Recall Curve
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}