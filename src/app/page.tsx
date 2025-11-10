import { getAllPosts } from '@/lib/posts';
import Feed from './components/Feed'
export default function Home() {
    const posts = getAllPosts();

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Recent Posts</h1>
            <Feed posts={posts} />
        </div>
    );
}