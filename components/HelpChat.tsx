"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function TypingIndicator() {
  return (
    <div className="flex items-start gap-2">
      <img src="/images/ccbotagentlogo.png" alt="CC Bot" className="w-9 h-9 rounded-full flex-shrink-0" />
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

export default function HelpChat() {
  const { t } = useTranslation();
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
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 font-ui">
        <img src="/images/ccbotagentlogo.png" alt="CC Bot" className="w-8 h-8 rounded-full" />
        {t.help.chatTitle}
      </h2>
      <div className="bg-white rounded-2xl border border-border-subtle flex flex-col" style={{ height: 600 }}>
        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <img src="/images/ccbotagentlogo.png" alt="CC Bot" className="w-20 h-20 rounded-full mb-4" />
              <h3 className="text-slate-900 font-bold font-ui mb-1">{t.help.chatEmpty}</h3>
              <p className="text-secondary text-sm font-body mb-6">{t.help.chatEmptyDesc}</p>
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
                      <img src="/images/ccbotagentlogo.png" alt="CC Bot" className="w-9 h-9 rounded-full flex-shrink-0" />
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-2.5 text-sm font-body whitespace-pre-wrap ${
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
              {isLoading && <TypingIndicator />}
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
      </div>
    </div>
  );
}
