import { ArrowUpRight } from "lucide-react";

export default function ContactButton() {
  return (
    <a
      href="mailto:buildwithsharpman@gmail.com"
      className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[10px] md:text-xs uppercase tracking-[3px] text-foreground rounded-full bg-primary hover:brightness-105 transition-all duration-200"
    >
      <span>LET'S TALK</span>
      <ArrowUpRight size={12} className="ml-1" />
    </a>
  );
}
