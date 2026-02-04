"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Brain, Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";

const highlights = [
    {
        icon: Code2,
        title: "Backend Development",
        description: "Building scalable APIs with FastAPI, Django, and Node.js",
    },
    {
        icon: Database,
        title: "Data Systems",
        description: "PostgreSQL, MongoDB, Redis, and vector databases",
    },
    {
        icon: Brain,
        title: "AI/ML Integration",
        description: "LLM orchestration, NLP pipelines, and ML model deployment",
    },
    {
        icon: Cloud,
        title: "Cloud & DevOps",
        description: "AWS, Docker, GitHub Actions, and infrastructure automation",
    },
];

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 relative">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 gradient-mesh opacity-30" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">About Me</h2>

                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mb-8"
                    >
                        <Card className="p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                            <p className="text-lg text-foreground/80 leading-relaxed text-center">
                                {profile.bio}
                            </p>

                            {/* Education Badge */}
                            {profile.education && (
                                <div className="mt-6 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="font-medium text-foreground">{profile.education.degree}</span>
                                    </div>
                                    <span className="hidden sm:inline">•</span>
                                    <span>{profile.education.institution}</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span>{profile.education.period}</span>
                                </div>
                            )}
                        </Card>
                    </motion.div>

                    {/* Skills Highlights Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                            >
                                <Card className="p-6 h-full hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <item.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">{item.title}</h3>
                                            <p className="text-sm text-foreground/70">{item.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
