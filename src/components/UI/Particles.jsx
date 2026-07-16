function getItems() {
  return Array.from({ length: 24 }, () => ({
    size: 2 + Math.random() * 4,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    dur: 10 + Math.random() * 12,
  }));
}

const ITEMS = getItems();

function Particles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {ITEMS.map((item, i) => {
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${item.left}%`,
              top: "-5%",
              width: item.size,
              height: item.size,
              background: "radial-gradient(circle, var(--primary), transparent 70%)",
              boxShadow: "0 0 12px color-mix(in srgb, var(--primary) 80%, transparent)",
              animation: `fall ${item.dur}s linear ${item.delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

export default Particles;
