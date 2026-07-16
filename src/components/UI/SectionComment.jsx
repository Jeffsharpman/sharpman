function SectionComment({ children, className = "" }) {
  return (
    <div
      className={`font-mono text-[10px] uppercase tracking-[3px] text-primary mb-1 ${className}`}
    >
      {children}
    </div>
  );
}

export default SectionComment;
