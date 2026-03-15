"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, Layout, Globe, Lightbulb, Shield, Zap } from "lucide-react";
import Image from "next/image";

const SKILLS = [
    { name: "Frontend Development", icon: <Layout className="w-6 h-6" />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { name: "Backend Development", icon: <Cpu className="w-6 h-6" />, items: ["Node.js", "PostgreSQL", "Prisma", "Redis", "Serverless"] },
    { name: "Design & UX", icon: <Lightbulb className="w-6 h-6" />, items: ["Figma", "Responsive Design", "Cinematic UI", "Micro-interactions"] },
];

import { X } from "lucide-react";

const CERTIFICATES = [
    { title: "Internship Certificate", image: "/images/internship certificate.jpg" },
    { title: "Internship Mentor Recommendation", image: "/images/internship mentor recomendation.jpg" },
    { title: "Canva Design Certificate", image: "/images/canva certificate.jpeg" },
    { title: "Achievement Certificate 1", image: "/images/certificate1.jpeg" },
    { title: "Achievement Certificate 2", image: "/images/certificate2.png" },
    { title: "Achievement Certificate 3", image: "/images/certificate3.jpg" },
];

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function About() {
    const [selectedCert, setSelectedCert] = useState<{ title: string; image: string } | null>(null);

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            {/* Introduction */}
            <section className="pt-40 pb-20 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 mb-4 px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 inline-block">
                            Biography
                        </span>
                        <h1 className="text-6xl md:text-8xl font-serif font-medium mb-8">
                            Code <span className="italic">meets</span> Art.
                        </h1>
                        <p className="text-xl text-white/70 font-sans leading-relaxed mb-6">
                            I&apos;m Abhinav Bhattarai, a passionate Full Stack Developer based in the heart of Nepal. My journey in the digital world is driven by a simple yet powerful goal: to bridge the gap between complex engineering and intuitive design.
                        </p>
                        <p className="text-lg text-white/50 font-sans leading-relaxed mb-8">
                            With several years of experience in the industry, I&apos;ve honed my skills in modern web technologies, always striving to deliver solutions that are not just functional, but genuinely delightful to use. I believe every line of code is an opportunity to create something meaningful.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group"
                    >
                        <Image
                            src="/images/abhinav.jpg"
                            alt="Abhinav Bhattarai"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay" />
                    </motion.div>
                </div>
            </section>

            {/* Technical Skills */}
            <section className="py-24 bg-[#0d0d0d] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl font-serif font-medium mb-4">Technical <span className="italic text-indigo-400">Expertise</span></h2>
                        <div className="w-20 h-1 bg-indigo-500" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {SKILLS.map((skill, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                            >
                                <div className="mb-6 text-indigo-400">{skill.icon}</div>
                                <h3 className="text-2xl font-serif font-medium mb-6">{skill.name}</h3>
                                <ul className="space-y-3">
                                    {skill.items.map((item, j) => (
                                        <li key={j} className="text-white/50 text-sm flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-indigo-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificates */}
            <section className="py-24 container mx-auto px-6">
                <div className="mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-serif font-medium mb-4">Certifications & <span className="italic text-indigo-400">Achievements</span></h2>
                        <div className="w-20 h-1 bg-indigo-500" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CERTIFICATES.map((cert, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            onClick={() => setSelectedCert(cert)}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-[#111111] cursor-pointer"
                        >
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-xl font-serif font-medium text-white/90 group-hover:text-white">{cert.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-32 container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-serif font-medium mb-12 italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"
                    >
                        &ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <Zap className="w-10 h-10 text-indigo-400 mb-6" />
                            <h4 className="text-xl font-serif mb-2">Performance First</h4>
                            <p className="text-white/40 text-sm">Speed is a feature, not an afterthought.</p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center"
                        >
                            <Shield className="w-10 h-10 text-violet-400 mb-6" />
                            <h4 className="text-xl font-serif mb-2">Clean Architecture</h4>
                            <p className="text-white/40 text-sm">Maintainable code for long-term success.</p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <Globe className="w-10 h-10 text-blue-400 mb-6" />
                            <h4 className="text-xl font-serif mb-2">Global Standards</h4>
                            <p className="text-white/40 text-sm">Bringing world-class quality to every project.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-8 right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
                        >
                            <X size={24} />
                        </button>
                        
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
                        >
                            <Image
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                fill
                                className="object-contain bg-black"
                                sizes="100vw"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                <h3 className="text-2xl font-serif font-medium text-white">{selectedCert.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
