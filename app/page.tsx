"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { ArrowUpRight, Mail, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FEATURED_PROJECTS = [
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
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ title: string; image: string } | null>(null);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Preview / Bento Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6">
              Engineering <span className="italic text-indigo-400">Excellence</span> through Design.
            </h2>
            <p className="text-white/60 font-sans text-lg">
              I specialize in building high-performance web applications that don&apos;t just work beautifully, but also feel amazing to use. My approach combines rigorous engineering with a deep understanding of user experience.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/about" className="flex items-center gap-2 text-indigo-400 font-bold group">
              More About Me
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <BentoGrid />
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-[#0d0d0d] border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-20"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 mb-4 px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-medium">Featured <span className="italic">Projects</span></h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {FEATURED_PROJECTS.map((project, i) => (
              <ProjectCard 
                key={i} 
                {...project} 
                index={i} 
                onClickImage={() => setSelectedImage({ title: project.title, image: project.image })}
              />
            ))}
          </motion.div>

          <div className="mt-20 text-center">
            <Link
              href="/projects"
              className="px-10 py-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all font-bold"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 container mx-auto px-6 text-center">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-8xl font-serif font-medium mb-12">
            Let&apos;s build something <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              extraordinary
            </span> together.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-extrabold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10"
          >
            Start a Conversation
            <Mail className="w-6 h-6" />
          </Link>
        </motion.div>
      </section>

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
