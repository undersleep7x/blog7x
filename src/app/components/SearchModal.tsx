'use client'

import {useState, useEffect, useMemo, useRef} from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'

interface Post {
    slug: string
    title: string
    date: string
    tags: string[]
    tagline?: string
}

interface SearchModalProps {
    isOpen: boolean
    onClose: () => void
    posts: Post[]
}

export default function SearchModal({isOpen, onClose, posts}: SearchModalProps) {
    const [query, setQuery] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const selectedIndexRef = useRef(0)
    const resultsRef = useRef<Post[]>([])
    const router = useRouter()
    const containerRef = useRef<HTMLDivElement>(null)

    const results = useMemo(() => {
        if (!query.trim()) return []

        const searchQuery = query.toLowerCase()
        return posts.filter(
            (post) =>
                post.title.toLowerCase().includes(searchQuery) ||
                post.tags.some((tag) => tag.toLowerCase().includes(searchQuery)) ||
                post.tagline?.toLowerCase().includes(searchQuery),
        )
    }, [query, posts])

    useEffect(() => {
        resultsRef.current = results
    }, [results])

    useEffect(() => {
        selectedIndexRef.current = selectedIndex
    }, [selectedIndex])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                onClose()
            }
            if (e.key === 'Escape') {
                onClose()
            }
            const currentResults = resultsRef.current
            if (currentResults.length === 0) return

            if (e.key === 'ArrowDown') {
                e.preventDefault()
                setSelectedIndex((prev) => (prev + 1) % currentResults.length)
            }

            if (e.key === 'ArrowUp') {
                e.preventDefault()
                setSelectedIndex(
                    (prev) => (prev - 1 + currentResults.length) % currentResults.length,
                )
            }

            if (e.key === 'Enter') {
                e.preventDefault()
                const selected = currentResults[selectedIndexRef.current]
                if (selected) {
                    router.push(`/posts/${selected.slug}`)
                    onClose()
                }
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown)
            return () => document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, onClose, router])

    useEffect(() => {
        if (containerRef.current) {
            const selectedElement = containerRef.current.children[selectedIndex] as HTMLElement
            selectedElement?.scrollIntoView({block: 'nearest', behavior: 'smooth'})
        }
    }, [selectedIndex])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-82"
            onClick={onClose}
        >
            <div
                className="bg-secondary border border-theme rounded-lg w-full max-w-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4 border-b border-theme">
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-primary text-primary px-4 font-mono py-2 rounded outline-none"
                        autoFocus
                    />
                </div>
                <div ref={containerRef} className="max-h-96 overflow-y-auto">
                    {results.length === 0 && query && (
                        <div className="p-4, text-secondary text-center font-mono">
                            No results found
                        </div>
                    )}
                    {results.map((post, index) => (
                        <Link
                            key={post.slug}
                            href={`posts/${post.slug}`}
                            onClick={onClose}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor = 'var(--bg-primary)')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor = 'var(--bg-secondary)')
                            }
                            className={`block p-4 hover:bg-tertiary transition-colors border-b border-theme last:border-b-0
                                        ${index === selectedIndex ? 'bg-primary' : 'bg-secondary'}`}
                        >
                            <h3 className="text-primary font-bold mb-1">{post.title}</h3>
                            <p className="text-secondary text-sm mb-2">{post.tagline}</p>
                            <div className="flex gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs bg-tertiary px-2 py-1 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="hidden md:flex justify-end p-3 border-t border-theme text-xs text-secondary">
                    <span className="">
                        Scroll with arrows | Select with ENTER | Ctrl+K or ESC to close
                    </span>
                </div>
            </div>
        </div>
    )
}
