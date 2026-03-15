"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    index: number;
    onClickImage?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    tags,
    githubUrl,
    liveUrl,
    index,
    onClickImage,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#111111] hover:border-white/20 transition-all duration-300"
        >
            {/* Image Container */}
            <div 
                className="relative aspect-video overflow-hidden bg-[#050505] cursor-pointer"
                onClick={onClickImage}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-white/5 border border-white/5 text-white/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-indigo-400 transition-colors">
                    {title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
                    {description}
                </p>

                <div className="flex items-center gap-4">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-bold text-white group/btn"
                        >
                            View Live
                            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all"
                        >
                            <Github size={18} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
