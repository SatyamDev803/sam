import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            type: "article",
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/#projects"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Projects
                    </Link>

                    {/* Header */}
                    <header className="mb-8">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6">
                            {project.longDescription}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-3">
                            {project.githubUrl && (
                                <Button asChild>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="h-4 w-4 mr-2" />
                                        View Code
                                    </a>
                                </Button>
                            )}
                            {project.liveUrl && (
                                <Button asChild variant="outline">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Live Demo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </header>

                    <Separator className="my-8" />

                    {/* Content */}
                    <div className="space-y-8">
                        {/* Problem */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.problem}
                            </p>
                        </section>

                        {/* Solution */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.solution}
                            </p>
                        </section>

                        {/* Architecture */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.architecture}
                            </p>
                        </section>

                        {/* Challenges */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">
                                Challenges & Learnings
                            </h2>
                            <ul className="space-y-3">
                                {project.challenges.map((challenge, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-muted-foreground"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                        {challenge}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
