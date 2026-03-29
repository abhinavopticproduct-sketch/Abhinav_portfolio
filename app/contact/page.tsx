"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function Contact() {
    const [isPending, setIsPending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPending(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const result = await submitContactForm(formData);

        setIsPending(false);

        if (result.success) {
            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setIsSuccess(false), 5000);
        } else {
            setError(result.error || "Something went wrong");
        }
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <div className="pt-40 pb-24 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 mb-4 px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 inline-block">
                            Get in Touch
                        </span>
                        <h1 className="text-6xl md:text-8xl font-serif font-medium mb-8">
                            Let&apos;s <span className="italic">Connect.</span>
                        </h1>
                        <p className="text-xl text-white/60 font-sans leading-relaxed mb-12">
                            Whether you have a groundbreaking project in mind or just want to say hi, I&apos;m always open to new opportunities and interesting conversations.
                        </p>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex items-start gap-6"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-widest uppercase text-white/30 mb-1">Email Me</h4>
                                    <a href="mailto:abhinavbhattarai16@gmail.com" className="text-lg font-serif hover:text-indigo-400 transition-colors">
                                        abhinavbhattarai16@gmail.com
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex items-start gap-6"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-widest uppercase text-white/30 mb-1">Location</h4>
                                    <p className="text-lg font-serif">Kathmandu, Nepal (GMT+5:45)</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-8 md:p-12 rounded-3xl border border-white/10 bg-[#111111] shadow-2xl shadow-black"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-sm font-sans">
                                    {error}
                                </div>
                            )}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 ml-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500 transition-all font-sans"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 ml-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500 transition-all font-sans"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 ml-1">
                                    How can I help?
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Let&apos;s talk about your project..."
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500 transition-all font-sans resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isPending}
                                className={`w-full py-5 rounded-2xl font-extrabold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all ${isSuccess
                                    ? "bg-emerald-500 text-white"
                                    : "bg-white text-black hover:scale-[1.02] active:scale-[0.98]"
                                    }`}
                            >
                                {isPending ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : isSuccess ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
