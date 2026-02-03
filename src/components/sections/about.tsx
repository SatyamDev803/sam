"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";

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

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Bio Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="lg:col-span-2"
                        >
                            <Card className="h-full p-16 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {profile.bio}
                                </p>
                            </Card>
                        </motion.div>

                        {/* Focus Areas Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <Card className="h-full p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                <h3 className="text-lg font-semibold mb-6 text-primary">Focus Areas</h3>
                                <ul className="space-y-4">
                                    {profile.focusAreas.map((area, index) => (
                                        <motion.li
                                            key={area}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-primary" />
                                            <span className="text-muted-foreground">{area}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Education Card */}
                    {profile.education && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="mt-6"
                        >
                            <Card className="p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-primary font-bold text-lg">
                                                {profile.education.institution.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{profile.education.degree}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {profile.education.institution} | {profile.education.location}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        {profile.education.period}
                                    </span>
                                </div>
                            </Card>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
