"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function TypingDots() {
  return (
    <div className="flex items-start gap-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2a1845] to-[#4a2d6b] flex items-center justify-center flex-shrink-0">
        <img src="/images/ccbotagentlogo.png" alt="CC Bot" className="w-6 h-6 rounded-full" />
      </div>
      <div className="bg-background-surface border border-border-subtle rounded-2xl rounded-bl-md px-4 py-3">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2 h-2 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

export default function FloatingChat() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedQuestions = t.help.suggestedQuestions;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.message }]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: t.help.chatError },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl border border-border-subtle shadow-2xl flex flex-col overflow-hidden"
            style={{ height: 520 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border-subtle bg-gradient-to-r from-[#2a1845] to-[#4a2d6b]">
              <img src="/images/ccbotagentlogo.png" alt="CC Bot" className="w-9 h-9 rounded-full" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm font-ui">{t.help.chatEmpty}</h3>
                <p className="text-white/60 text-xs font-body">Online</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-white text-lg">close</span>
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-2">
                  <img src="/images/ccbotagentlogo.png" alt="CC Bot" className="w-16 h-16 rounded-full mb-3" />
                  <h3 className="text-slate-900 font-bold font-ui text-sm mb-1">{t.help.chatEmpty}</h3>
                  <p className="text-secondary text-xs font-body mb-4">{t.help.chatEmptyDesc}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {suggestedQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(q)}
                        className="text-xs bg-background-surface hover:bg-accent/10 text-slate-700 hover:text-accent border border-border-subtle px-3 py-1.5 rounded-full transition-colors font-ui"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <AnimatePresence>
                    {messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex ${msg.role === "user" ? "justify-end" : "items-start gap-2"}`}
                      >
                        {msg.role === "assistant" && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2a1845] to-[#4a2d6b] flex items-center justify-center flex-shrink-0">
                            <img src="/images/ccbotagentlogo.png" alt="CC Bot" className="w-6 h-6 rounded-full" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] px-3 py-2 text-sm font-body whitespace-pre-wrap ${
                            msg.role === "user"
                              ? "bg-primary text-slate-900 rounded-2xl rounded-br-md"
                              : "bg-background-surface border border-border-subtle text-slate-800 rounded-2xl rounded-bl-md"
                          }`}
                        >
                          {msg.content}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {isLoading && <TypingDots />}
                </>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-border-subtle">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.help.chatPlaceholder}
                  maxLength={1000}
                  disabled={isLoading}
                  className="flex-1 bg-background-surface border border-border-subtle rounded-full px-4 py-2.5 text-sm font-body text-slate-900 placeholder:text-secondary/60 focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-accent hover:bg-accent/80 text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={
          isOpen
            ? {}
            : {
                y: [0, -6, 0],
                rotate: [0, 3, -3, 0],
                boxShadow: [
                  "0 0 0 0 rgba(94,45,121,0.4)",
                  "0 0 0 12px rgba(94,45,121,0)",
                  "0 0 0 0 rgba(94,45,121,0)",
                ],
              }
        }
        transition={
          isOpen
            ? {}
            : {
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeOut" },
              }
        }
        className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-gradient-to-br from-[#2a1845] to-[#4a2d6b] flex items-center justify-center border-2 border-[#5e2d79]/40"
      >
        <img src="/images/ccbotagentlogo.png" alt="CC Bot Assistant" className="w-11 h-11 rounded-full" />
      </motion.button>
    </div>
  );
}
