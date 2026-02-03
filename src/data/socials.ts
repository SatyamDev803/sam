import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export interface SocialLink {
    name: string;
    url: string;
    icon: typeof Github;
}

export const socials: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/SatyamDev803",
        icon: Github,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/satyam-sharma-6296781b2/",
        icon: Linkedin,
    },
    {
        name: "Twitter",
        url: "https://x.com/Satyam_S1603",
        icon: Twitter,
    },
    {
        name: "Email",
        url: "mailto:sharmasatyam1603@gmail.com",
        icon: Mail,
    },
];
