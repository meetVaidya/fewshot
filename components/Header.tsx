import Link from 'next/link'
import { MicIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <MicIcon className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">
                            Audio Analysis Dashboard
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            About
                        </Link>
                        <Link href="/docs" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Documentation
                        </Link>
                        <Link href="/support" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Support
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Button variant="outline" className="w-full md:w-auto">
                            Upload Audio
                        </Button>
                    </div>
                    <nav className="flex items-center">
                        <Button variant="ghost" size="icon" aria-label="Toggle user menu">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}