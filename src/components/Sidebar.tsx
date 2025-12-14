import FileTree from '@/components/FileTree'

interface Post {
    slug: string
    title: string
    date: string
    tags: string[]
    tagline: string
}

interface SidebarProps {
    isOpen: boolean
    posts: Omit<Post, 'content'>[]
}

export default function Sidebar({isOpen, posts}: SidebarProps) {
    if (!isOpen) return null

    return (
        <div className="w-48 bg-secondary border-r border-theme overflow-y-auto">
            <div className="p-2">
                <div className="font-mono text-primary">
                    <FileTree posts={posts} />
                </div>
            </div>
        </div>
    )
}
