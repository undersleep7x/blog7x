import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

const postsDirectory = path.join(process.cwd(), 'posts')

export interface Post {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    tagline: string;
    content: string;
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const fullPath = path.join(postsDirectory, slug, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
        .use(remarkRehype)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        tagline: data.tagline,
        content: contentHtml,
    };
}

export function getAllPosts(): Omit<Post, 'content'>[] {
    const slugs = fs.readdirSync(postsDirectory).filter((slug) => {
        const fullPath = path.join(postsDirectory, slug);
        return fs.statSync(fullPath).isDirectory();
    });

    const posts = slugs.map((slug) => {
        const fullPath = path.join(postsDirectory, slug, 'index.md');
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date,
            tags: data.tags || [],
            tagline: data.tagline,
        };
    });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}