'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { keywords, keywordSentiment } from "@/lib/dummy-data"

const COLORS = ['#000000', '#333333', '#666666']

export default function KeywordAnalysis() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Keyword List</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Keyword</TableHead>
                                <TableHead>Frequency</TableHead>
                                <TableHead>Timestamp</TableHead>
                                <TableHead>Sentiment</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {keywords.map((keyword, index) => (
                                <TableRow key={index}>
                                    <TableCell>{keyword.word}</TableCell>
                                    <TableCell>{keyword.frequency}</TableCell>
                                    <TableCell>{keyword.timestamp}</TableCell>
                                    <TableCell>{keyword.sentiment}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Keyword Clusters</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 bg-muted flex items-center justify-center">
                        Dendrogram Visualization
                    </div>
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Keyword Sentiment</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={keywordSentiment}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${(percent * 100).toFixed(2)}%`}
                            >
                                {keywordSentiment.map((entry, index: any) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Keyword Cloud</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 bg-muted flex items-center justify-center">
                        Word Cloud Visualization
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}