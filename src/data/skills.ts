export interface Skill {
    name: string;
    category: SkillCategory;
}

export type SkillCategory =
    | "Languages"
    | "Frameworks"
    | "Databases & Caching"
    | "Cloud & DevOps";

export const skills: Skill[] = [
    // Languages
    { name: "Python", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "SQL", category: "Languages" },

    // Frameworks
    { name: "FastAPI", category: "Frameworks" },
    { name: "Django", category: "Frameworks" },
    { name: "Flask", category: "Frameworks" },
    { name: "React", category: "Frameworks" },
    { name: "Next.js", category: "Frameworks" },

    // Databases & Caching
    { name: "PostgreSQL", category: "Databases & Caching" },
    { name: "MongoDB", category: "Databases & Caching" },
    { name: "Redis", category: "Databases & Caching" },
    { name: "ChromaDB", category: "Databases & Caching" },

    // Cloud & DevOps
    { name: "Docker", category: "Cloud & DevOps" },
    { name: "AWS (EC2, S3, Lambda)", category: "Cloud & DevOps" },
    { name: "GitHub Actions", category: "Cloud & DevOps" },
    { name: "Linux", category: "Cloud & DevOps" },
    { name: "Nginx", category: "Cloud & DevOps" },
];

export const skillCategories: SkillCategory[] = [
    "Languages",
    "Frameworks",
    "Databases & Caching",
    "Cloud & DevOps",
];
