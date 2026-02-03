export interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | null;
    description: string;
    achievements: string[];
    logo?: string;
}

export const experiences: Experience[] = [
    {
        id: "tecrave-swe",
        role: "Software Engineer",
        company: "Técrave",
        location: "Remote",
        startDate: "2026-01",
        endDate: null,
        description: "Building something cool",
        achievements: [
            "Contributing to product architecture and technical decision-making as part of the core engineering team",
        ],
        logo: "/images/tecrave-logo.png",
    },
    {
        id: "kredit-intern",
        role: "Software Engineer Intern - Backend & ML",
        company: "Kredit (Fintech Startup)",
        location: "Remote",
        startDate: "2024-12",
        endDate: "2025-05",
        description: "Engineered backend systems and ML pipelines for credit scoring and risk evaluation.",
        achievements: [
            "Engineered scalable ETL pipeline processing 4 heterogeneous data sources (Government APIs, CIBIL, internal datasets), increasing throughput by 50%",
            "Improved credit scoring model to 70%+ R2 through advanced feature engineering (polynomial transforms, clustering, imputation)",
            "Developed alternative creditworthiness scoring using behavioral signals achieving 85%+ prediction accuracy for unscoreable applicants",
            "Designed inference APIs using FastAPI and WebSockets for real-time credit decision-making with low latency",
        ],
    },
];
