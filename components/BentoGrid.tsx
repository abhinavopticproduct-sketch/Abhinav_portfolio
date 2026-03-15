"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Globe, Zap, Cpu, Award } from "lucide-react";

const BentoGrid = () => {
    const items = [
        {
            title: "Technical Skills",
            description: "Frontend, Backend, and UI/UX Design mastery using modern stacks.",
            icon: <Palette className="w-8 h-8 text-indigo-400" />,
            className: "col-span-12 md:col-span-6 lg:col-span-4",
        },
        {
            title: "50+ Projects",
            description: "Successfully delivered high-performance web and mobile applications.",
            icon: <Globe className="w-8 h-8 text-violet-400" />,
            className: "col-span-12 md:col-span-6 lg:col-span-4",
        },
        {
            title: "GitHub Stats",
            description: "Active contributor with 500+ commits this year. Clean, maintainable code.",
            icon: <Code2 className="w-8 h-8 text-emerald-400" />,
            className: "col-span-12 md:col-span-12 lg:col-span-4",
        },
        {
            title: "3+ Years Experience",
            description: "Professional experience in building scalable digital solutions for global clients.",
            icon: <Award className="w-8 h-8 text-amber-400" />,
            className: "col-span-12 md:col-span-8",
        },
        {
            title: "Nepal Based",
            description: "Working from Kathmandu. Available for remote opportunities globally.",
            icon: <Zap className="w-8 h-8 text-rose-400" />,
            className: "col-span-12 md:col-span-4",
        },
    ];

    return (
        <div className="grid grid-cols-12 gap-6 pb-20">
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className={`group p-8 rounded-3xl border border-white/10 bg-[#111111] hover:border-white/20 transition-all flex flex-col justify-between ${item.className}`}
                >
                    <div className="mb-6">{item.icon}</div>
                    <div>
                        <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-indigo-400 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed font-sans">
                            {item.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default BentoGrid;
