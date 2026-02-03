export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    problem: string;
    solution: string;
    architecture: string;
    challenges: string[];
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
}

export const projects: Project[] = [

    {
        slug: "talentai",
        title: "TalentAI",
        description: "AI-powered recruitment platform with distributed computing for parallel candidate-job matching.",
        longDescription: "A microservices platform using FastAPI with Ray distributed computing, enabling parallel candidate-job match evaluations with advanced NLP and vector search capabilities.",
        problem: "Traditional recruitment processes are slow and struggle to match candidates effectively across large job pools, leading to poor hiring decisions and lengthy time-to-hire.",
        solution: "Built a distributed AI platform that parallelizes candidate matching using Ray, implements semantic search with vector embeddings, and provides contextual explanations using LLMs.",
        architecture: "Microservices architecture with FastAPI backend, Ray for distributed task processing, ChromaDB for vector similarity search, PostgreSQL for structured data, Redis for caching, and LangChain for LLM orchestration.",
        challenges: [
            "Optimizing PostgreSQL with composite B-tree and GIN indexes, reducing query latency from 250ms to sub-50ms",
            "Implementing 384-dim Sentence-Transformer embeddings with ChromaDB achieving sub-100ms vector searches",
            "Building Redis caching layer with 80% hit rate to reduce processing time and API costs",
            "Achieving 85% NLP extraction accuracy across 500+ skill taxonomy with async Celery resume parsing",
        ],
        techStack: ["FastAPI", "PostgreSQL", "ChromaDB", "Ray", "spaCy", "Redis", "LangChain", "Celery"],
        githubUrl: "https://github.com/SatyamDev803/TalentAI",
        featured: true,
    },
    {
        slug: "avaxpay",
        title: "AvaxPay",
        description: "Decentralized payment platform on Avalanche blockchain with shareable payment links and QR codes.",
        longDescription: "A decentralized payment platform on Avalanche blockchain enabling users to create shareable payment links and QR codes for instant crypto payments with multi-token support.",
        problem: "Traditional payment systems are slow, expensive, and require intermediaries. Crypto payments lack user-friendly interfaces for everyday transactions.",
        solution: "Built a decentralized payment platform that generates shareable links and QR codes for instant crypto payments with seamless wallet integration.",
        architecture: "Next.js frontend with Wagmi v2 and RainbowKit for wallet connections, smart contracts on Avalanche, real-time QR generation, and analytics dashboard.",
        challenges: [
            "Integrated Wagmi v2 and RainbowKit for seamless wallet connections supporting MetaMask, Core, and WalletConnect",
            "Implemented real-time QR code generation for instant payment sharing",
            "Built smart contract integration with multi-token support (AVAX, USDC, USDT)",
            "Created comprehensive payment dashboard with analytics tracking",
        ],
        techStack: ["Next.js", "TypeScript", "Wagmi", "RainbowKit", "Avalanche", "Smart Contracts"],
        githubUrl: "https://github.com/SatyamDev803/AvaxPay",
        liveUrl: "https://avax-pay.vercel.app/",
        featured: true,
    },
    {
        slug: "cognicart",
        title: "CogniCart",
        description: "Full-stack AI analytics platform with semantic search and RAG-based natural language querying.",
        longDescription: "An e-commerce analytics platform with FastAPI backend and Next.js frontend, featuring OAuth authentication, RBAC, and AI-powered natural language querying for data insights.",
        problem: "E-commerce businesses struggle to extract actionable insights from their data due to complex query requirements and lack of intuitive analytics tools.",
        solution: "Developed a full-stack platform that combines traditional analytics with semantic search and RAG-based querying, allowing users to ask questions in natural language.",
        architecture: "FastAPI backend with OAuth/RBAC authentication, Next.js frontend with TanStack Table for visualization, PostgreSQL for data storage, and vector embeddings for semantic search.",
        challenges: [
            "Designing PostgreSQL schema and optimizing complex JOIN queries for real-time analytics",
            "Implementing OAuth authentication and role-based access control for secure multi-tenant access",
            "Building semantic search with vector embeddings for intuitive data discovery",
            "Accelerating insight discovery by 60% through natural language query interface",
        ],
        techStack: ["FastAPI", "Next.js", "PostgreSQL", "OAuth", "TanStack", "Vector Embeddings"],
        githubUrl: "https://github.com/SatyamDev803/CogniCart",
        featured: true,
    },
    {
        slug: "cryptexai",
        title: "CryptexAI",
        description: "Dynamic cryptocurrency forecasting system using deep learning with 92% directional accuracy.",
        longDescription: "A real-time cryptocurrency forecasting system using LSTM, GRU, and Transformer architectures with WebSocket streaming and automated backtesting framework.",
        problem: "Cryptocurrency markets are highly volatile and traditional forecasting methods fail to capture complex temporal patterns in price movements.",
        solution: "Built a multi-model forecasting system that combines LSTM, GRU, and Transformer architectures with real-time data streaming and automated hyperparameter optimization.",
        architecture: "TensorFlow-based model training pipeline, FastAPI for inference APIs, React frontend for visualization, WebSocket integration for real-time updates, and Optuna for hyperparameter tuning.",
        challenges: [
            "Achieving 92% directional accuracy on 5+ years of historical cryptocurrency data",
            "Integrating yfinance API with WebSocket streaming for low-latency bidirectional communication",
            "Building backtesting framework with Optuna, improving trading precision by 35%",
            "Reducing training convergence time by 40% through optimized hyperparameter search",
        ],
        techStack: ["TensorFlow", "FastAPI", "React", "WebSockets", "Optuna", "yfinance"],
        githubUrl: "https://github.com/SatyamDev803/CryptexAI",
        featured: false,
    },
];
