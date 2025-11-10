'use client';

import Link from 'next/link';

interface Post {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    tagline: string;
}

export default function Feed ({ posts }: { posts: Post[] }) {
    return (
        <div className="space-y-6">
            {posts.map((post) => (
                <div
                    key={post.slug}
                    className="p-4 rounded-lg"
                    style={{ border: '1px solid var(--border)' }}
                >
                    <Link
                        href={`/posts/${post.slug}`}
                        className="text-2xl font-bold mb-2 hover:underline block"
                    >
                        {post.title}
                    </Link>
                    <div className="text-secondary text-xs mb-2">{post.date}</div>
                    {post.tagline && (
                        <p className="text-primary mb-2">{post.tagline}</p>
                    )}
                    <div className="flex gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <span key={tag} className="bg-tertiary px-2 py-1 rounded text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-end">
                        <Link
                            href={`/posts/${post.slug}`}
                            className="inline-block px-4 py-2 bg-tertiary rounded text-sm transition-colors"
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
                        >
                            Read More →
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}