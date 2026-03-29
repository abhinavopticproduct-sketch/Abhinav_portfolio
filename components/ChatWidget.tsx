"use client";

import { useChat, UIMessage } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const isLoading = status === "streaming" || status === "submitted";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ parts: [{ type: 'text', text: input }] });
    setInput("");
  };
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[32rem] bg-[#111111] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-[#1a1a1a] border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/20 p-2 rounded-lg">
                  <Bot className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">Abhinav's AI</h3>
                  <p className="text-white/50 text-xs">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-white/40 text-sm mt-10">
                  Hi! I'm an AI assistant. How can I help you today?
                </div>
              )}
              {messages.map((m: UIMessage) => (
                <div
                  key={m.id}
                  className={`flex items-start gap-3 ${
                    m.role === "user" ? "flex-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      m.role === "user"
                        ? "bg-white/10"
                        : "bg-red-500/20 text-red-500"
                    }`}
                  >
                    {m.role === "user" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm max-w-[80%] ${
                      m.role === "user"
                        ? "bg-white/10 text-white rounded-tr-sm"
                        : "bg-[#1a1a1a] text-white/90 border border-white/5 rounded-tl-sm"
                    }`}
                  >
                    {m.parts?.map((part, index) => {
                      if (part.type === 'text') {
                        return <span key={index}>{part.text}</span>;
                      }
                      return null;
                    })}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5">
                    <Loader2 className="w-4 h-4 text-white/50 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-[#1a1a1a]/50 border-t border-white/5"
            >
              <div className="relative">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-[#0a0a0a] text-white placeholder-white/40 border border-white/10 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 text-sm transition-all"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input?.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-full transition-all disabled:opacity-50 disabled:hover:bg-red-500/10 disabled:hover:text-red-500"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-500/30 text-white rounded-full flex items-center justify-center shadow-2xl transition-all z-50 z-[100]"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}
