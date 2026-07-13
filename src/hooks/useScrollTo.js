import { useCallback, useEffect } from "react";

const NAVBAR_OFFSET = 80;

export default function useScrollTo() {
  const scrollTo = useCallback((href) => {
    if (!href || !href.startsWith("#")) return;

    const id = href.slice(1);
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      requestAnimationFrame(() => scrollTo(hash));
    }
  }, [scrollTo]);

  return scrollTo;
}
