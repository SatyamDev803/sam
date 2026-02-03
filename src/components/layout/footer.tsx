import Link from "next/link";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-auto border-t border-border/50 bg-card/30 backdrop-blur-xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <Link href="/" className="inline-flex items-center gap-2 mb-4">
                                <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                                    {profile.name.charAt(0)}
                                </span>
                                <span className="font-semibold">{profile.name}</span>
                            </Link>
                            <p className="text-sm text-muted-foreground">
                                Building scalable backend systems and AI-powered applications.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href={`mailto:${profile.email}`}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {profile.email}
                                    </a>
                                </li>
                                <li className="text-muted-foreground">
                                    {profile.education?.location || "India"}
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="font-semibold mb-4 text-sm">Connect</h4>
                            <div className="flex gap-3">
                                {socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg bg-muted/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                        <p>{currentYear} {profile.name}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
