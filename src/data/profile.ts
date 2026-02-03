export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  focusAreas: string[];
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    coursework: string[];
  };
}

export const profile: Profile = {
  name: "Satyam Sharma",
  role: "Software Engineer",
  tagline: "Building scalable backend systems, ML pipelines, and AI-powered applications.",
  bio: "I am a software engineer passionate about building robust, scalable systems. I enjoy solving complex problems at the intersection of backend engineering and machine learning.",
  focusAreas: [
    "Backend Systems & APIs",
    "Machine Learning & AI",
    "Distributed Computing",
  ],
  email: "sharmasatyam1603@gmail.com",
  phone: "+91 99679 37003",
  linkedin: "https://www.linkedin.com/in/satyam-sharma-6296781b2/",
  github: "https://github.com/SatyamDev803",
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Mumbai",
    location: "Mumbai, India",
    period: "Jun 2021 - May 2024",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Systems",
      "Computer Networks",
      "Software Engineering",
      "Distributed Systems",
    ],
  },
};
