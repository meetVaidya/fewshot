import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Audio Analysis Dashboard',
    description: 'Fewshot keyword analysis of audio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="relative flex min-h-screen flex-col">
                    <Header />
                    <div className="flex-1">{children}</div>
                    <footer className="py-6 md:px-8 md:py-0">
                        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                                Built by Your Company. The source code is available on{" "}
                                <a
                                    href="https://github.com/yourusername/audio-analysis-dashboard"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-medium underline underline-offset-4"
                                >
                                    GitHub
                                </a>
                                .
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    )
}