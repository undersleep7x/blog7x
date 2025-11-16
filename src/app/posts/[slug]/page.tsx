import {getPostBySlug, getAllPosts} from '@/lib/posts'

export async function generateStaicParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function PostPage({params}: {params: {slug: string}}) {
    const {slug} = params
    const post = await getPostBySlug(slug)

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-1">{post.title}</h1>
            <p className="font-mono text-sm mb-4">{post.tagline}</p>
            <div className="text-secondary mb-1 font-mono text-sm">{post.date}</div>
            <div className="flex gap-2 mb-8 font-mono">
                {post.tags.map((tag) => (
                    <span key={tag} className="bg-tertiary px-3 py-1 rounded text-xs">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="prose prose-lg" dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
    )
}

