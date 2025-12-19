import {type ReactNode, useEffect, useState} from 'react'
import Navbar from './Navbar'
import BottomBar from './BottomBar'
import Sidebar from './Sidebar'
import SearchModal from './SearchModal'
import {ThemeProvider} from './ThemeProvider'

interface Post {
    slug: string
    title: string
    date: string
    tags: string[]
    tagline: string
}

interface IDELayoutProps {
    children: ReactNode
    posts: Post[]
}

export default function IDELayout({children, posts}: IDELayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [searchOpen, setSearchOpen] = useState(false)
    const latestPostSlug = posts[0]?.slug || ''

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                setSearchOpen(true)
            }
        }

        if (!searchOpen) {
            document.addEventListener('keydown', handleKeyDown)
            return () => document.removeEventListener('keydown', handleKeyDown)
        }
    }, [searchOpen])

    return (
        <ThemeProvider>
            <div className="h-screen flex flex-col">
                <Navbar
                    sidebarOpen={sidebarOpen}
                    onOpenSearch={() => setSearchOpen(true)}
                    onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                />

                <div className="flex-1 flex overflow-hidden">
                    <div className="hidden md:flex">
                        <Sidebar isOpen={sidebarOpen} posts={posts} />
                    </div>
                    <div className="flex-1 overflow-y-auto bg-primary text-primary p-4 scroll-container">
                        {children}
                    </div>
                </div>

                <BottomBar posts={posts} latestPostSlug={latestPostSlug} />

                <SearchModal
                    isOpen={searchOpen}
                    onClose={() => setSearchOpen(false)}
                    posts={posts}
                />
            </div>
        </ThemeProvider>
    )
}
