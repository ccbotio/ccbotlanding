import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 mt-8 first:mt-0">
        <span className="font-display italic">{children}</span>
      </h1>
    ),
    h2: ({ children }) => {
      const id = typeof children === "string"
        ? children.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
        : undefined;
      return (
        <h2
          className="text-xl font-bold font-ui text-slate-900 mb-4 mt-12 flex items-center gap-3"
          id={id}
        >
          <div className="w-1.5 h-6 rounded-full bg-accent" />
          {children}
        </h2>
      );
    },
    h3: ({ children }) => (
      <h3 className="text-base font-bold font-ui text-slate-800 mb-3 mt-8">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-slate-600 leading-relaxed mb-4 font-body text-[15px]">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2.5 mb-5 ml-1 text-slate-600 font-body text-[15px]">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="space-y-2.5 mb-5 ml-1 text-slate-600 font-body text-[15px] counter-reset-item">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed flex items-start gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
    strong: ({ children }) => (
      <strong className="text-slate-900 font-semibold">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="bg-accent/[0.06] text-accent px-1.5 py-0.5 rounded-md text-[13px] font-mono border border-accent/10">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-[#1a1225] text-slate-200 rounded-2xl p-5 mb-5 overflow-x-auto text-[13px] font-mono border border-[#2a1f35]">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <div className="callout rounded-2xl border border-border-subtle bg-background-surface p-5 mb-5">
        <div className="relative z-10 flex items-start gap-3">
          <span className="material-symbols-outlined text-primary text-lg mt-0.5 flex-shrink-0">info</span>
          <div className="text-slate-600 font-body text-[14px] leading-relaxed [&>p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-5 rounded-2xl border border-border-subtle bg-white">
        <table className="w-full text-sm text-left">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-background-surface border-b border-border-subtle">
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="px-5 py-3.5 font-ui font-semibold text-slate-900 text-[13px]">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-5 py-3.5 text-slate-600 border-b border-border-subtle/40 font-body text-[14px]">
        {children}
      </td>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-accent hover:text-accent/80 underline underline-offset-2 decoration-accent/30 hover:decoration-accent/60 font-medium transition-colors">
        {children}
      </a>
    ),
    hr: () => <div className="section-divider" />,
    ...components,
  };
}
