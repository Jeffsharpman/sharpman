import ScrollReveal from "../UI/ScrollReveal";

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
}) {
  return (
    <ScrollReveal animation="fadeUp" delay={delay} className={className}>
      <p>{text}</p>
    </ScrollReveal>
  );
}
