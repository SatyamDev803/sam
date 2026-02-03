"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { skills, skillCategories } from "@/data/skills";

export function SkillsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const getSkillsByCategory = (category: string) => {
        return skills.filter((skill) => skill.category === category);
    };

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                        Skills & Technologies
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: 0.1 * categoryIndex }}
                                className="p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
                            >
                                <h3 className="text-sm font-semibold mb-4 text-primary">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {getSkillsByCategory(category).map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={
                                                isInView
                                                    ? { opacity: 1, scale: 1 }
                                                    : { opacity: 0, scale: 0.8 }
                                            }
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                                            }}
                                        >
                                            <Badge
                                                variant="secondary"
                                                className="text-xs py-1.5 px-3 hover:bg-primary/10 hover:text-primary transition-colors cursor-default backdrop-blur-sm"
                                            >
                                                {skill.name}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
