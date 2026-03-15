"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-xs text-center md:text-left">
                        <Link href="/" className="inline-block mb-6">
                            <span className="font-serif text-3xl font-medium tracking-tight">
                                Abhinav<span className="text-indigo-400">.</span>
                            </span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed font-sans">
                            Building the next generation of web experiences with passion and precision. Based in Nepal, working globally.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex items-center gap-6">
                            {[
                                { icon: <Github size={20} />, href: "https://github.com" },
                                { icon: <Twitter size={20} />, href: "https://twitter.com" },
                                { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
                                { icon: <Mail size={20} />, href: "mailto:hello@abhinav.me" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/50 hover:text-white transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <p className="text-white/30 text-[11px] font-bold tracking-widest uppercase font-sans">
                            © {new Date().getFullYear()} Abhinav Bhattarai. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
