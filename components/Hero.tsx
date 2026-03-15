"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="flex justify-center mb-10"
                        >
                            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(99,102,241,0.15)] group">
                                <Image
                                    src="/images/abhinav.jpg"
                                    alt="Abhinav Bhattarai"
                                    fill
                                    priority
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>

                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6">
                            Available for New Projects
                        </span>
                        <h1 className="text-6xl md:text-8xl font-serif font-medium leading-tight mb-8">
                            Crafting Digital <br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                                Masterpieces
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-sans max-w-2xl mx-auto mb-12 leading-relaxed">
                            I&apos;m Abhinav Bhattarai, a Full Stack Developer & Designer who blends technical excellence with artistic vision to create immersive web experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/projects"
                                className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-500/20"
                            >
                                View My Work
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                            <div className="flex items-center gap-4">
                                {[
                                    { icon: <Github size={20} />, href: "https://github.com" },
                                    { icon: <Twitter size={20} />, href: "https://twitter.com" },
                                    { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
