"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* Floating Navigation */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
            >
                <nav className="bg-background/60 backdrop-blur-xl border border-border/50 rounded-full shadow-lg shadow-black/5 dark:shadow-black/20">
                    <div className="flex items-center justify-between h-14 px-4 sm:px-6">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-semibold text-base"
                        >
                            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                                {profile.name.charAt(0)}
                            </span>
                            <span className="hidden sm:inline">{profile.name.split(" ")[0]}</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href ||
                                    (item.href.startsWith("#") && pathname === "/");
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`text-sm px-3 py-1.5 rounded-full transition-colors ${isActive
                                                ? "text-primary bg-primary/10"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1">
                            <ThemeToggle />

                            {/* Mobile Menu Button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden h-9 w-9 rounded-full"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-4 w-4" />
                                ) : (
                                    <Menu className="h-4 w-4" />
                                )}
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="mt-2 bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg overflow-hidden"
                    >
                        <div className="py-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.header>
        </>
    );
}
