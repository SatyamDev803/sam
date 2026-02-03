import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readingTime: string;
    content: string;
    tags?: string[];
}

export interface BlogPostMeta {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readingTime: string;
    tags?: string[];
}

export function getBlogPosts(): BlogPostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));

    const posts = files
        .map((file) => {
            const filePath = path.join(BLOG_DIR, file);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);

            return {
                slug: file.replace(".mdx", ""),
                title: data.title || "Untitled",
                excerpt: data.excerpt || "",
                date: data.date || new Date().toISOString(),
                readingTime: readingTime(content).text,
                tags: data.tags || [],
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
        slug,
        title: data.title || "Untitled",
        excerpt: data.excerpt || "",
        date: data.date || new Date().toISOString(),
        readingTime: readingTime(content).text,
        content,
        tags: data.tags || [],
    };
}

export function getAllBlogSlugs(): string[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    return fs
        .readdirSync(BLOG_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(".mdx", ""));
}
