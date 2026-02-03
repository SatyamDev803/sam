import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getBlogPost, getAllBlogSlugs } from "@/lib/mdx";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllBlogSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
        },
    };
}

function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

// Custom MDX components with proper spacing
const components = {
    h1: ({ children }: { children: React.ReactNode }) => (
        <h1 className="text-3xl font-bold mt-10 mb-6">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-2xl font-semibold mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
        <h3 className="text-xl font-semibold mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
        <h4 className="text-lg font-semibold mt-6 mb-2">{children}</h4>
    ),
    p: ({ children }: { children: React.ReactNode }) => (
        <p className="text-muted-foreground leading-relaxed mb-6">{children}</p>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
        <ul className="list-disc list-outside ml-6 space-y-3 mb-6 text-muted-foreground">
            {children}
        </ul>
    ),
    ol: ({ children }: { children: React.ReactNode }) => (
        <ol className="list-decimal list-outside ml-6 space-y-3 mb-6 text-muted-foreground">
            {children}
        </ol>
    ),
    li: ({ children }: { children: React.ReactNode }) => (
        <li className="leading-relaxed pl-2">{children}</li>
    ),
    a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
        <a
            href={href}
            className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        >
            {children}
        </a>
    ),
    code: ({ children }: { children: React.ReactNode }) => (
        <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
            {children}
        </code>
    ),
    pre: ({ children }: { children: React.ReactNode }) => (
        <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            {children}
        </pre>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
        <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground my-6">
            {children}
        </blockquote>
    ),
    hr: () => <Separator className="my-10" />,
    strong: ({ children }: { children: React.ReactNode }) => (
        <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
        <em className="italic">{children}</em>
    ),
    img: ({ src, alt }: { src?: string; alt?: string }) => (
        <figure className="my-8">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                {src && (
                    <Image
                        src={src}
                        alt={alt || "Blog image"}
                        fill
                        className="object-cover"
                    />
                )}
            </div>
            {alt && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3">
                    {alt}
                </figcaption>
            )}
        </figure>
    ),
    Callout: ({
        type = "note",
        children,
    }: {
        type?: "note" | "warning" | "tip";
        children: React.ReactNode;
    }) => (
        <div className={`callout callout-${type} my-6`}>{children}</div>
    ),
    BlogImage: ({
        src,
        alt,
        caption,
    }: {
        src: string;
        alt: string;
        caption?: string;
    }) => (
        <figure className="my-8">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                <Image src={src} alt={alt} fill className="object-cover" />
            </div>
            {caption && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3">
                    {caption}
                </figcaption>
            )}
        </figure>
    ),
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="pt-28 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Blog
                    </Link>

                    {/* Header */}
                    <header className="mb-10">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="h-4 w-4" />
                                {formatDate(post.date)}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4" />
                                {post.readingTime}
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-6">{post.title}</h1>
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </header>

                    <Separator className="mb-10" />

                    {/* Content */}
                    <div className="prose-content">
                        <MDXRemote source={post.content} components={components} />
                    </div>
                </div>
            </div>
        </article>
    );
}
