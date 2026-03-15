"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const ALL_PROJECTS = [
    {
        title: "PHP Blog Website",
        description: "A feature-rich CMS with user authentication, role management, and dynamic content rendering.",
        image: "/images/myproject1.png",
        tags: ["PHP", "MySQL", "Tailwind CSS"],
        githubUrl: "https://github.com",
        liveUrl: "https://demo.com",
    },
    {
        title: "Android CRUD App",
        description: "A powerful inventory management application built for Android with local SQLite storage and clean architecture.",
        image: "/images/myproject2.jpg",
        tags: ["Kotlin", "Android SDK", "SQLite"],
        githubUrl: "https://github.com",
        liveUrl: "https://demo.com",
    },
    {
        title: "Multiplayer Drawing Game",
        description: "Real-time canvas synchronization using WebSockets for a fun and interactive drawing experience.",
        image: "/images/myproject3.png",
        tags: ["Next.js", "Socket.io", "Framer Motion"],
        githubUrl: "https://github.com",
        liveUrl: "https://demo.com",
    },
    // Adding placeholders to show the grid
    {
        title: "AI Image Generator",
        description: "Cloud-based solution for generating artistic images using Stable Diffusion API.",
        image: "/images/project1.png",
        tags: ["Next.js", "OpenAI", "Cloudinary"],
        githubUrl: "https://github.com",
        liveUrl: "https://demo.com",
    },
    {
        title: "E-commerce Dashboard",
        description: "Real-time analytics and inventory management for modern online stores.",
        image: "/images/project2.png",
        tags: ["React", "D3.js", "Firebase"],
        githubUrl: "https://github.com",
        liveUrl: "https://demo.com",
    },
    {
        title: "Social Media Platform",
        description: "A community-focused social network with encrypted messaging and custom profiles.",
        image: "/images/project3.png",
        tags: ["Node.js", "Redis", "Socket.io"],
        githubUrl: "https://github.com",
        liveUrl: "https://demo.com",
    },
];

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState<{ title: string; image: string } | null>(null);

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <div className="pt-40 pb-20 container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mb-20"
                >
                    <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 mb-4 px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 inline-block">
                        Portfolio
                    </span>
                    <h1 className="text-6xl md:text-8xl font-serif font-medium mb-8">
                        Selected <span className="italic">Works</span>
                    </h1>
                    <p className="text-xl text-white/60 font-sans max-w-2xl leading-relaxed">
                        A collection of my recent projects, ranging from complex web applications to experimental design explorations. Each piece reflects my commitment to quality and innovation.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {ALL_PROJECTS.map((project, i) => (
                        <ProjectCard 
                            key={i} 
                            {...project} 
                            index={i} 
                            onClickImage={() => setSelectedImage({ title: project.title, image: project.image })}
                        />
                    ))}
                </motion.div>
            </div>

            <Footer />

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
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
                            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
                        >
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="w-full h-full object-contain bg-black"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                <h3 className="text-2xl font-serif font-medium text-white">{selectedImage.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
