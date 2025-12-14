import {useState} from 'react'
import {FileText, Folder} from 'lucide-react'

interface Post {
    slug: string
    title: string
    date: string
    tags: string[]
}

interface FileTreeProps {
    posts: Post[]
}

export default function FileTree({posts}: FileTreeProps) {
    const [expandedYears, setExpandedYears] = useState<Set<string>>(
        new Set([new Date().getFullYear().toString()]),
    )
    const [expandedMonths, setExpandedMonths] = useState<Set<string>>(new Set())

    const grouped = posts.reduce(
        (acc, post) => {
            const [year, month] = post.date.split('-')
            if (!acc[year]) acc[year] = {}
            if (!acc[year][month]) acc[year][month] = []
            acc[year][month].push(post)
            return acc
        },
        {} as Record<string, Record<string, Post[]>>,
    )

    const toggleYear = (year: string) => {
        setExpandedYears((prev) => {
            const next = new Set(prev)
            next.has(year) ? next.delete(year) : next.add(year)
            return next
        })
    }

    const toggleMonth = (yearMonth: string) => {
        setExpandedMonths((prev) => {
            const next = new Set(prev)
            next.has(yearMonth) ? next.delete(yearMonth) : next.add(yearMonth)
            return next
        })
    }

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

    return (
        <div className="text-sm">
            {Object.keys(grouped)
                .sort()
                .reverse()
                .map((year) => (
                    <div key={year}>
                        <button
                            onClick={() => toggleYear(year)}
                            className="w-full text-left py-1 px-2 hover:bg-tertiary text-primary flex items-center"
                        >
                            <span className="mr-1">{expandedYears.has(year) ? '▼' : '▶'}</span>
                            <span className="flex items-center">
                                <Folder className="w-4 h-4 mr-1" />
                                {year}
                            </span>
                        </button>

                        {expandedYears.has(year) &&
                            Object.keys(grouped[year])
                                .sort()
                                .reverse()
                                .map((month) => {
                                    const yearMonth = `${year}-${month}`
                                    return (
                                        <div key={month} className="ml-4">
                                            <button
                                                onClick={() => toggleMonth(yearMonth)}
                                                className="w-full text-left py-1 px-2 hover:bg-tertiary text-primary flex items-center"
                                            >
                                                <span className="mr-1">
                                                    {expandedMonths.has(yearMonth) ? '▼' : '▶'}
                                                </span>
                                                <Folder className="w-4 h-4 mr-1" />
                                                {monthNames[parseInt(month) - 1]}
                                            </button>

                                            {expandedMonths.has(yearMonth) &&
                                                grouped[year][month].map((post) => (
                                                    <a
                                                        key={post.slug}
                                                        href={`/posts/${post.slug}`}
                                                        className="flex text-xs items-center py-1 px-2 ml-4 hover:underline text-primary"
                                                    >
                                                        <FileText className="text-sm w-4 h-4 mr-1" />{' '}
                                                        {post.title}
                                                    </a>
                                                ))}
                                        </div>
                                    )
                                })}
                    </div>
                ))}
        </div>
    )
}
