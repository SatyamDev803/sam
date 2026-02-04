"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function ExperienceSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Experience</h2>

                        <div className="space-y-6">
                            {experiences.map((experience, index) => (
                                <motion.div
                                    key={experience.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: 0.15 * index }}
                                >
                                    <Card className="hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                        <CardHeader className="pb-4">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                                <div className="flex items-center gap-4">
                                                    {experience.logo ? (
                                                        <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-white">
                                                            <Image
                                                                src={experience.logo}
                                                                alt={`${experience.company} logo`}
                                                                width={48}
                                                                height={48}
                                                                className="w-full h-full object-contain"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                            <span className="text-primary font-bold text-lg">
                                                                {experience.company.charAt(0)}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <CardTitle className="text-lg">{experience.role}</CardTitle>
                                                        <p className="text-primary font-medium text-sm">
                                                            {experience.company}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Badge variant="outline" className="font-normal">
                                                        {formatDate(experience.startDate)} -{" "}
                                                        {experience.endDate
                                                            ? formatDate(experience.endDate)
                                                            : "Present"}
                                                    </Badge>
                                                    <span className="hidden sm:inline">|</span>
                                                    <span className="hidden sm:inline">{experience.location}</span>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <p className="text-foreground/70 mb-4 text-sm">
                                                {experience.description}
                                            </p>
                                            <ul className="space-y-2">
                                                {experience.achievements.map((achievement, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 text-sm text-foreground/70"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
