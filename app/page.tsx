import Dashboard from '@/components/Dashboard'

export default function Home() {
    return (
        <main className="flex-1">
            <div className="container py-6 md:py-8">
                <div className="flex flex-col items-start gap-2">
                    <h1 className="text-3xl font-bold tracking-tight">Audio Analysis Dashboard</h1>
                    <p className="text-lg text-muted-foreground">
                        Analyze your audio files with fewshot keyword detection and more.
                    </p>
                </div>
                <div className="mt-8">
                    <Dashboard />
                </div>
            </div>
        </main>
    )
}