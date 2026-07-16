function GlowBlob({
  className = "",
  blur = "130px",
  opacity,
  color,
  ...props
}) {
  const style = {
    filter: `blur(${blur})`,
    ...(opacity != null && { opacity }),
    ...(color && { background: `radial-gradient(circle, ${color}, transparent 70%)` }),
  };

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-primary/4 ${className}`}
      style={style}
      {...props}
    />
  );
}

export default GlowBlob;
