'use client'

import {Post} from '@/lib/posts'
import {usePathname, useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'

interface BottomBarProps {
    latestPostSlug: string
    posts: Omit<Post, 'content'>[]
}

export default function BottomBar({latestPostSlug, posts}: BottomBarProps) {
    const pathname = usePathname()
    const router = useRouter()
    const [scrollProgress, setScrollProgress] = useState(100)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'h') {
                e.preventDefault()
                router.push('/')
            }
            if ((e.metaKey || e.ctrlKey) && e.key === 'n' && latestPostSlug) {
                e.preventDefault()
                router.push(`/posts/${latestPostSlug}`)
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [router, latestPostSlug])

    useEffect(() => {
        const handleScroll = () => {
            const scrollContainer = document.querySelector('.scroll-container')
            if (!scrollContainer) return

            const scrollTop = scrollContainer.scrollTop
            const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 100

            setScrollProgress(Math.round(progress))
        }

        const scrollContainer = document.querySelector('.scroll-container')
        if (scrollContainer) {
            handleScroll()
            scrollContainer.addEventListener('scroll', handleScroll)
            return () => scrollContainer.removeEventListener('scroll', handleScroll)
        }
    }, [pathname])

    const getBreadcrumb = () => {
        if (pathname === '/') return 'Home'
        if (pathname === '/about') return 'About'
        if (pathname.startsWith('/posts/')) {
            const slug = pathname.split('/').pop()
            const post = posts.find((p) => p.slug === slug)

            if (post) {
                const [year, month] = post.date.split('-')
                const monthNames = [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                ]
                const monthName = monthNames[parseInt(month) - 1]

                return `${year} › ${monthName} › ${post.title}`
            }
            return `Posts › ${slug}`
        }
        return pathname
    }

    return (
        <div className="font-mono max-h-6 bg-secondary border-t border-theme flex items-center px-4 text-xs text-secondary">
            <span>{getBreadcrumb()}</span>
            <div className="flex-1" />
            <span className="mr-4">{scrollProgress}%</span>
            <span className="hidden md:block mr-4">Ctrl+H › Home</span>
            <span className="hidden md:block">Ctrl+N › Latest Post</span>{' '}
        </div>
    )
}
