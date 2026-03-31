"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll("article h2[id], article h3[id]");
    const items: Heading[] = Array.from(elements).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: el.tagName === "H2" ? 2 : 3,
    }));
    setHeadings(items);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <div className="hidden xl:block w-56 flex-shrink-0">
      <div className="sticky top-[80px]">
        <div className="text-[10px] uppercase tracking-[2.5px] text-secondary font-ui font-semibold mb-3 flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-accent/40 inline-block" />
          On this page
        </div>
        <nav className="space-y-1">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block text-[12px] font-ui py-1 transition-colors border-l-2 ${
                heading.level === 3 ? "pl-5" : "pl-3"
              } ${
                activeId === heading.id
                  ? "text-accent font-semibold border-l-accent"
                  : "text-slate-400 hover:text-slate-600 border-l-transparent"
              }`}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
