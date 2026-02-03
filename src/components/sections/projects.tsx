"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function ProjectsSection() {
    const ref = useRef(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const cardWidth = 320;
            const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section id="projects" className="py-24 relative">
            {/* Gradient background */}
            <div className="absolute inset-0 gradient-mesh opacity-50" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-4xl mx-auto mb-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A selection of projects showcasing backend systems, blockchain, and AI.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Scroll Buttons */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border-border/50 shadow-lg hidden md:flex"
                            onClick={() => scroll("left")}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border-border/50 shadow-lg hidden md:flex"
                            onClick={() => scroll("right")}
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>

                        {/* Scrollable Container */}
                        <div
                            ref={scrollRef}
                            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    className="flex-shrink-0 w-[300px] snap-start"
                                >
                                    <Card className="h-full flex flex-col group hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                                        <CardHeader className="flex-shrink-0 pb-3">
                                            <CardTitle className="text-lg">{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-1 flex flex-col pt-0">
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {project.techStack.slice(0, 3).map((tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="secondary"
                                                        className="text-xs backdrop-blur-sm"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                                {project.techStack.length > 3 && (
                                                    <Badge variant="outline" className="text-xs">
                                                        +{project.techStack.length - 3}
                                                    </Badge>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border/50">
                                                {project.githubUrl && (
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 px-2 text-xs"
                                                        asChild
                                                    >
                                                        <a
                                                            href={project.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Github className="h-3.5 w-3.5 mr-1" />
                                                            Code
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.liveUrl && (
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 px-2 text-xs text-primary"
                                                        asChild
                                                    >
                                                        <a
                                                            href={project.liveUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <ArrowUpRight className="h-3.5 w-3.5 mr-1" />
                                                            Live
                                                        </a>
                                                    </Button>
                                                )}
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-8 px-2 text-xs ml-auto"
                                                    asChild
                                                >
                                                    <a href={`/projects/${project.slug}`}>
                                                        Details
                                                    </a>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Scroll Indicator */}
                        <p className="text-center text-sm text-muted-foreground mt-4 md:hidden">
                            ← Swipe to see more →
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
