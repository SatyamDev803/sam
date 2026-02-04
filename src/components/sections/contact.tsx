"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="absolute inset-0 gradient-mesh opacity-50" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-lg text-foreground/70">
                            Have a project in mind? Let's build something meaningful together.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="space-y-4"
                        >
                            <Card className="p-5 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <a
                                            href={`mailto:${profile.email}`}
                                            className="font-medium hover:text-primary transition-colors"
                                        >
                                            {profile.email}
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-5 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Location</p>
                                        <p className="font-medium">{profile.education?.location || "India"}</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-5 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                <p className="text-sm text-muted-foreground mb-3">Connect with me</p>
                                <div className="flex gap-3">
                                    {socials.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-xl bg-muted/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                                            aria-label={social.name}
                                        >
                                            <social.icon className="h-5 w-5" />
                                        </a>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <Card className="p-6 h-full hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <Send className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                                        <p className="text-muted-foreground">
                                            Thanks for reaching out. I'll get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium">
                                                    Name
                                                </label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    placeholder="Your name"
                                                    value={formState.name}
                                                    onChange={(e) =>
                                                        setFormState({ ...formState, name: e.target.value })
                                                    }
                                                    className="bg-background/50 backdrop-blur-sm"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">
                                                    Email
                                                </label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="you@example.com"
                                                    value={formState.email}
                                                    onChange={(e) =>
                                                        setFormState({ ...formState, email: e.target.value })
                                                    }
                                                    className="bg-background/50 backdrop-blur-sm"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">
                                                Message
                                            </label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tell me about your project..."
                                                rows={4}
                                                value={formState.message}
                                                onChange={(e) =>
                                                    setFormState({ ...formState, message: e.target.value })
                                                }
                                                className="bg-background/50 backdrop-blur-sm resize-none"
                                                required
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full rounded-xl h-11 text-base glow-primary"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                "Sending..."
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 h-4 w-4" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
