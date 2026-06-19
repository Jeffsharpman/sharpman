export default function ContactButton() {
  return (
    
    <a  href="mailto:buildwithsharpman@gmail.com"
      className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[10px] md:text-xs uppercase tracking-[3px] text-foreground rounded-full bg-primary hover:brightness-105 transition-all duration-200"
    >
      <span>LET'S TALK</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-1">
        <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}