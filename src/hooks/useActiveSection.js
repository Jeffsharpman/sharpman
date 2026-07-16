import { useState, useEffect } from "react";

export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observers = [];
    const visible = new Map();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }

          if (visible.size > 0) {
            let best = "";
            let bestRatio = -1;
            visible.forEach((ratio, sid) => {
              if (ratio > bestRatio) {
                bestRatio = ratio;
                best = sid;
              }
            });
            setActiveId(best);
          }
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-80px 0px -40% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeId;
}
