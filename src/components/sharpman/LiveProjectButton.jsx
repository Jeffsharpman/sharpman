import { ArrowUpRight } from "lucide-react";

export default function LiveProjectButton({ href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[10px] md:text-xs uppercase tracking-[3px] text-primary border border-primary rounded-full hover:bg-primary/10 transition-colors duration-200"
    >
      <span>VIEW PROJECT</span>
      <ArrowUpRight size={12} />
    </a>
  );
}
