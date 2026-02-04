"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Clean background - no particles */}
            <div className="absolute inset-0 bg-background" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Editorial Grid Layout */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Main Content - Takes up more space */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Overline */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3"
                        >
                            <div className="h-px w-12 bg-foreground/40" />
                            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                                Software Engineer
                            </span>
                        </motion.div>

                        {/* Bold Asymmetric Typography */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-normal leading-[0.95]">
                                <span className="block">Satyam</span>
                                <span className="block text-muted-foreground/60">Sharma</span>
                            </h1>
                        </motion.div>

                        {/* Tagline with offset */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-xl lg:ml-16"
                        >
                            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                {profile.tagline}
                            </p>
                        </motion.div>

                        {/* CTA Buttons - Editorial style */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-4"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="group rounded-xl px-8 h-14 text-base font-medium tracking-wide w-full sm:w-auto"
                            >
                                <Link href="#projects">
                                    View Work
                                    <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <div className="flex gap-3">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="rounded-xl px-6 h-14 text-base font-medium tracking-wide border-2 hover:bg-foreground hover:text-background transition-all flex-1 sm:flex-none"
                                >
                                    <Link href="/blog">
                                        Read Blog
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="rounded-xl px-6 h-14 text-base font-medium tracking-wide border-2 hover:bg-foreground hover:text-background transition-all flex-1 sm:flex-none"
                                >
                                    <a href="/resume/Satyam_SDE.pdf" download>
                                        <Download className="mr-2 h-4 w-4" />
                                        Resume
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Info Cards */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Focus Areas */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="p-6 border border-border/50 bg-card/30 backdrop-blur-sm rounded-xl"
                        >
                            <h3 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
                                Focus Areas
                            </h3>
                            <ul className="space-y-2">
                                {profile.focusAreas.map((area, index) => (
                                    <li
                                        key={area}
                                        className="text-sm font-medium flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex items-center gap-4"
                        >
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-border/50 rounded-xl hover:bg-foreground hover:text-background transition-all"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-border/50 rounded-xl hover:bg-foreground hover:text-background transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href={`mailto:${profile.email}`}
                                className="p-3 border border-border/50 rounded-xl hover:bg-foreground hover:text-background transition-all"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="hidden lg:flex items-center gap-3 pt-8"
                        >
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent"
                            />
                            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground -rotate-90 origin-left translate-y-8">
                                Scroll
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
