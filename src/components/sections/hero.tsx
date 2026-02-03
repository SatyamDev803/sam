"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlowBackground } from "@/components/flow-background";
import { profile } from "@/data/profile";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Flow Background Animation */}
            <FlowBackground />

            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-lavender-soft/20 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Hi, I'm{" "}
                            <span className="relative inline-block">
                                <span className="text-primary">{profile.name.split(" ")[0]}</span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="absolute -bottom-1 left-0 h-1 bg-primary/40 rounded-full"
                                />
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl sm:text-2xl text-muted-foreground mb-4"
                    >
                        {profile.role}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
                    >
                        {profile.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3"
                    >
                        <Button asChild size="lg" className="group rounded-xl px-6 h-12 text-base glow-primary">
                            <Link href="#projects">
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-xl px-6 h-12 text-base bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80">
                            <Link href="/blog">Read Blog</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-xl px-6 h-12 text-base bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80">
                            <a href="/resume/Satyam_SDE.pdf" download>
                                <Download className="mr-2 h-4 w-4" />
                                Resume
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
