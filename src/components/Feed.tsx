interface Post {
    slug: string
    title: string
    date: string
    tags: string[]
    tagline: string
}

export default function Feed({posts}: {posts: Post[]}) {
    return (
        <div className="space-y-6">
            {posts.map((post) => (
                <div
                    key={post.slug}
                    className="p-4 rounded-lg"
                    style={{border: '1px solid var(--border)'}}
                >
                    <a
                        href={`/posts/${post.slug}`}
                        className="text-2xl font-bold hover:underline block"
                    >
                        {post.title}
                    </a>
                    {post.tagline && <p className="text-primary mb-4">{post.tagline}</p>}
                    <div className="font-mono text-secondary text-xs mb-2">{post.date}</div>
                    <div className="font-mono flex gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <span key={tag} className="bg-tertiary px-2 py-1 rounded text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-end">
                        <a
                            href={`/posts/${post.slug}`}
                            className="inline-block px-4 py-2 bg-tertiary rounded text-sm transition-colors"
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = 'var(--text-secondary)')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = 'var(--text-primary)')
                            }
                        >
                            Read More →
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}
