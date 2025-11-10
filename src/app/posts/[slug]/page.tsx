import { getPostBySlug, getAllPosts } from "@/lib/posts";

export async function generateStaicParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    return (
        <div className='max-w-4xl mx-auto p-8'>
            <h1 className='text-4xl font-bold mb-2'>{post.title}</h1>
            <div className="text-secondary mb-1">{post.date}</div>
            <div className="flex gap-2 mb-8">
                {post.tags.map(tag => (
                    <span key={tag} className="bg-tertiary px-3 py-1 rounded text-sm">
                        {tag}
                    </span>
                ))}
            </div>
            <div
                className="prose prose-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    )
}