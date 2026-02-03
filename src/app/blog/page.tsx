import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Technical articles on backend development, distributed systems, and AI/ML.",
};

function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <div className="pt-28 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Blog</h1>
                        <p className="text-lg text-muted-foreground">
                            Technical articles on backend development, distributed systems,
                            and AI/ML.
                        </p>
                    </header>

                    {/* Posts */}
                    {posts.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-muted-foreground">
                                No blog posts yet. Check back soon!
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {posts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`}>
                                    <Card className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer mb-6">
                                        <CardHeader className="pb-3">
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar className="h-4 w-4" />
                                                    {formatDate(post.date)}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="h-4 w-4" />
                                                    {post.readingTime}
                                                </span>
                                            </div>
                                            <CardTitle className="flex items-center justify-between text-xl">
                                                <span className="group-hover:text-primary transition-colors">
                                                    {post.title}
                                                </span>
                                                <ArrowRight className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                            {post.tags && post.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {post.tags.map((tag) => (
                                                        <Badge
                                                            key={tag}
                                                            variant="secondary"
                                                            className="text-xs"
                                                        >
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
