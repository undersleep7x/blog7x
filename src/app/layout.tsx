import type {Metadata} from 'next'
import './globals.scss'
import IDELayout from '@/app/components/IDELayout'
import {getAllPosts} from '@/lib/posts'
import {ThemeProvider} from '../app/components/ThemeProvider'
import {JetBrains_Mono} from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
})

export const metadata: Metadata = {
    title: 'sleepDeprived',
    description: 'tech talk from undersleep7x',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const posts = getAllPosts()
    return (
        <html
            lang="en"
            className={`min-h-screen min-w-screen bg-primary theme-dark ${jetbrainsMono.variable}`}
        >
            <body>
                <ThemeProvider>
                    <IDELayout posts={posts}>{children}</IDELayout>
                </ThemeProvider>
            </body>
        </html>
    )
}
