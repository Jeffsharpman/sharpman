export default function LiveProjectButton({ href = "#" }) {
  return (
    
    <a  href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[10px] md:text-xs uppercase tracking-[3px] text-primary border border-primary rounded-full hover:bg-primary/10 transition-colors duration-200"
    >
      <span>VIEW PROJECT</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}