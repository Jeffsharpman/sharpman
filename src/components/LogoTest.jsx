import { useEffect, useRef, useState } from "react";

/**
 * SharpmanLogo — Animated brand logo component
 *
 * Props:
 *   size       — number (default 120) — controls width, height scales proportionally
 *   animation  — "draw" | "pulse" | "spin" | "float" | "flicker" | "none"  (default: "draw")
 *   color      — string (default: "#C8F135") — fill color for all paths
 *   glow       — boolean (default: true) — lime drop-shadow glow
 *   loop       — boolean (default: false) — repeat the draw animation on loop
 *   className  — string — extra classes on the svg element
 */
export default function LogoTest({
  size = 120,
  animation = "draw",
  color = "#C8F135",
  glow = true,
  loop = false,
  className = "",
}) {
  const svgRef = useRef(null);
  const [lengths, setLengths] = useState([0, 0, 0]);

  // Measure path lengths once on mount so CSS can handle the rest cleanly
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll("path");
    const measuredLengths = Array.from(paths).map((path) =>
      path.getTotalLength(),
    );
    setLengths(measuredLengths);
  }, []);

  const isDrawing = animation === "draw";

  // Construct the global keyframe sheet safely
  const css = `
    @keyframes sm-logo-pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.85; }
    }
    @keyframes sm-logo-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes sm-logo-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes sm-logo-flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
      20%, 24%, 55% { opacity: 0.3; }
    }
    
    /* Native CSS handling for the drawing effects */
    @keyframes sm-draw-stroke {
      to { stroke-dashoffset: 0; }
    }
    @keyframes sm-draw-fill {
      to { fill: ${color}; }
    }
    @keyframes sm-draw-stroke-loop {
      0%, 10% { stroke-dashoffset: var(--path-len); fill: transparent; }
      40%, 70% { stroke-dashoffset: 0; fill: ${color}; }
      90%, 100% { stroke-dashoffset: var(--path-len); fill: transparent; }
    }

    .sm-animate-container {
      transform-origin: center;
    }
    .sm-animate-pulse { animation: sm-logo-pulse 2.5s ease-in-out infinite; }
    .sm-animate-spin { animation: sm-logo-spin 8s linear infinite; }
    .sm-animate-float { animation: sm-logo-float 3s ease-in-out infinite; }
    .sm-animate-flicker { animation: sm-logo-flicker 2.5s step-end infinite; }
  `;

  // Determine standard filters
  const glowFilter = glow
    ? "drop-shadow(0 0 12px rgba(200,241,53,0.6)) drop-shadow(0 0 30px rgba(200,241,53,0.25))"
    : "none";

  const getPathStyle = (index) => {
    const len = lengths[index] || 0;
    if (!isDrawing || len === 0) {
      return { fill: color, transition: "fill 0.3s ease" };
    }

    const delay = index * 0.35;

    if (loop) {
      return {
        "--path-len": len,
        strokeDasharray: len,
        strokeDashoffset: len,
        animation: `sm-draw-stroke-loop 5s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
        animationDelay: `${delay}s`,
      };
    }

    return {
      strokeDasharray: len,
      strokeDashoffset: len,
      fill: "transparent",
      animation: `
        sm-draw-stroke 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards,
        sm-draw-fill 0.5s ease-out ${delay + 0.9}s forwards
      `.replace(/\s+/g, " "),
    };
  };

  return (
    <>
      <style>{css}</style>
      <svg
        ref={svgRef}
        width={size}
        height={size}
        viewBox="0 0 1280 1280"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ filter: glowFilter, display: "block" }}
        role="img"
        aria-label="Sharpman logo"
      >
        <title>Sharpman logo</title>

        <g
          className={`sm-animate-container ${animation !== "draw" && animation !== "none" ? `sm-animate-${animation}` : ""}`}
        >
          {/* Path 1 — outer circle / ring */}
          <path
            stroke={isDrawing ? color : "none"}
            strokeWidth={isDrawing ? "6" : "0"}
            strokeLinecap="round"
            style={getPathStyle(0)}
            d="M601.4 204.9c-119.7 13.3-217.5 67-291.5 160.1-10.8 13.6-20.4 27-24.7 34.5-1.6 2.7-4.8 8.1-7.2 12-4.5 7.3-17.9 33.6-22.3 44-12.9 30-23.9 68.4-29.6 103.5-3.9 24.2-4.6 34.6-4.5 67 .1 28 .4 33.7 2.7 51 7.5 55.7 22.8 102.3 48.6 148.9 5.7 10.2 7.6 13.3 15.9 26.1 14.5 22.2 30.2 41.2 52.1 63 35.9 35.7 66.7 58.3 107.9 78.9 58.7 29.5 115.9 44.1 181.7 46.7 25.2.9 57.6-1.9 86.5-7.6 92.7-18.3 176.2-65.2 238.1-134 55.7-61.9 89.7-137.7 101.4-226.5 1.6-12.1 2.7-40.9 2.2-57.5-2.2-70.9-21.7-142.3-54.4-199.2-35.1-61.2-83.4-111.2-144.3-149.5-32.2-20.3-72.5-38-110-48.3-11.4-3.2-34.5-8.2-45.5-10-28.7-4.6-76.4-6-103.1-3.1m90.1 10.9c59.8 7.6 116.3 28.4 169 62.1 51.2 32.7 99.6 82.1 129.7 132.3 31.9 53.4 49 105.3 57.4 174.8 2.2 18.6 2.2 61.1 0 82-5.2 48.6-19.2 96.3-41 139.7C964.4 891 886.9 962.3 798 998.6c-38.5 15.7-72.4 24.5-115.5 30-19.6 2.5-66.1 2.5-86.5 0-71.1-8.6-135.9-33.1-192.7-72.7-85.4-59.6-144.4-149.3-164.8-250.4-5.7-28.5-7.7-48.8-7.6-80.5 0-38.4 3.3-65.1 12.7-104 8.2-33.7 26.3-77.4 45.2-109 38.7-64.9 100.4-122 168.8-156.3 39.1-19.6 88.8-34.3 135.4-40.1 17.9-2.3 20.3-2.4 53-2.1 22.4.2 33.4.8 45.5 2.3"
          />

          {/* Path 2 — brackets / code symbols */}
          <path
            stroke={isDrawing ? color : "none"}
            strokeWidth={isDrawing ? "6" : "0"}
            strokeLinecap="round"
            style={getPathStyle(1)}
            d="M620 354.6c-20.8 10.7-51.3 26.9-65 34.4-5.8 3.2-13 7.1-16 8.7-11 6-45.7 25.7-52.7 30l-7.3 4.5v15.7c-.1 224.9.2 334.6.8 335.7.4.7 4.6 3.6 9.2 6.5 4.7 2.8 12.1 7.6 16.4 10.6 4.3 2.9 8.5 5.3 9.3 5.1 1.7-.4 3.7-4 10.2-18.2 2.7-6 4.7-11.5 4.4-12.3-.3-.7-2-2.1-3.7-3-1.7-.8-4.6-2.6-6.3-4l-3.3-2.4v-78.7l-4.2-.5c-2.4-.3-8.5-.4-13.5-.2-5.1.2-9.3.1-9.3-.1 0-.3 4.2-5.1 9.3-10.7s11.1-12.5 13.5-15.3l4.2-5.2.2-101.7.3-101.8 12.5-7.1c6.9-4 20.6-11.7 30.5-17.1s24.8-13.5 33-18c8.3-4.6 22.1-12 30.7-16.4l15.7-8.2 21.3 11.7c33.9 18.7 33.7 18.6 35.6 17.9 2-.8 22.6-22.9 23-24.8.3-1.4.4-1.4-31.3-18.4-13.7-7.4-29.9-16.1-35.8-19.4-5.9-3.2-11.8-5.9-13-5.9s-9.6 3.9-18.7 8.6m168.2 78.8c-1.2 2.5-4.6 8.4-7.7 13.1l-5.5 8.6.2 47.2.3 47.2 16.3.3 16.2.2V440.1l-7.5-5.1c-4.1-2.8-8.1-5.3-8.8-5.6-.8-.3-2.1 1.3-3.5 4M408 521.8c-21.5 16.2-69.3 51.4-84.5 62.2-4.2 3-12.7 9.1-18.9 13.5l-11.1 8.1-.3 17.2-.2 17.1 6.2 4.6c21.2 15.3 32.7 23.7 64.2 46.9 19.3 14.2 38.5 28.4 42.6 31.5 9.7 7.3 14.7 10.4 15.3 9.4.3-.4.5-9.8.6-20.8.1-14.9-.2-20.5-1.1-21.6-.7-.9-11.4-9.1-23.8-18.2-30.2-22.4-64.4-47.8-64.8-48.1-.3-.4 7.8-6.5 28.8-21.7 27.1-19.7 45.5-33.2 53.3-39.2l7.7-6-.2-21.5c-.2-13.3-.7-21.6-1.3-21.8-.5-.2-6.2 3.6-12.5 8.4m451 13.4.1 22.3 8.7 6.2c19.6 14 70.2 51.6 78 58l2.7 2.1-3 2.4c-1.6 1.2-21.9 15.9-45 32.4l-42 30.1-.3 17c-.1 9.3.1 19.3.5 22.2l.8 5.3 16-11.8c25.6-18.8 89.1-65.1 100.5-73.2 5.8-4.1 10.8-8 11.2-8.6s.8-8.1.8-16.8v-15.6l-4.7-3.9c-2.7-2.2-10.6-8.1-17.8-13.3-7.1-5.1-14.5-10.5-16.4-11.9s-9.3-7-16.5-12.4c-7.2-5.3-14.9-11.1-17.1-12.8s-10.1-7.5-17.5-12.8c-7.4-5.4-18.7-13.7-25-18.4-6.3-4.8-12.1-8.7-12.7-8.7-1 0-1.3 5.1-1.3 22.2m-55.6 40.1c-1.6 1.8-8.6 9.3-15.6 16.5L775 605.1v80.7c0 44.3-.3 80.9-.8 81.3-.4.4-4.5 2.9-9.2 5.7-4.7 2.7-14.8 8.7-22.5 13.2-22.8 13.6-72.2 42.1-91.2 52.6-5 2.7-5.4 2.8-8 1.3-1.5-.9-5.3-3-8.3-4.7s-11.8-6.7-19.5-11.2l-14-8.1-3.9 4.3C592.3 826 580 842 580 843c0 .4 5.5 3.9 12.3 7.7 6.7 3.8 21 12.2 31.7 18.6 10.8 6.4 20.3 11.9 21.1 12.2.9.3 7.1-2.8 15.5-7.8 7.6-4.6 23.8-14.2 35.9-21.4 12.1-7.1 25.4-15 29.5-17.6 4.1-2.5 19-11.5 33-20s28.9-17.6 33-20.2 9.4-5.9 11.7-7.3 4.4-3.5 4.6-4.7c.2-1.1.3-48.8.3-105.9-.1-71.7-.4-104-1.2-104.3-.5-.2-2.3 1.2-4 3"
          />

          {/* Path 3 — lightning bolt */}
          <path
            stroke={isDrawing ? color : "none"}
            strokeWidth={isDrawing ? "6" : "0"}
            strokeLinecap="round"
            style={getPathStyle(2)}
            d="m808.5 314.1c-6.6 8.3-13.8 17.4-16.1 20.2-2.2 2.9-9.2 11.7-15.5 19.7-6.3001 8-15.6 19.9-20.7 26.5-19.1 24.9-25 32.6-41.1 53-19.7 25-27.3 34.6-48.5 61-8.9 10.9-22.8 28.5-31.1 39.1-8.2001 10.5-23.1 29.2-33 41.4-9.8998 12.3-22.5 28-28 35-5.5 6.9-16.5 20.6-24.5 30.4-8 9.7-14.6 18.1-14.8 18.7-0.20005 0.5 12.5 0.9 32.6 0.9h33l-6.9 15.7c-3.8 8.7-8.9999 20.3-11.4 25.8-5.8 13-21.2 49.1-33.2 77.5-5.1999 12.4-11.2 26.5-13.3 31.5-2.1002 4.9-9.8001 22.9-17 40-7.2999 17-14 32.8-15 35-1.0002 2.2-3.0002 6.9-4.5002 10.5-2.6001 6.3-15.1 35.1-18.2 41.8-0.79995 1.8-1.2999 3.7-1.1 4.3 0.20004 0.5 11.1-12.6 24.3-29.2 13.2-16.6 30.8-38.5 39-48.7 8.3-10.1 21.2-26.2 28.9-35.6 17.3-21.4 53.3-65.9 56.6-70 6.2-7.9 32.9-40 68-81.7 30.2-36 72.3-85.2 81.2-94.9 4.3-4.6 7.8-9 7.8-9.7 0-1-8.0001-1.3-39.5-1.3-21.7 0-39.5-0.3-39.5-0.6 0-0.5 5.8-13.7 17-38.9 12.9-29 41.3-96 64.1-151 17.6-42.5 18.7-45 24-57.5 5.6999-13.3 9.6999-24 9.0998-24-0.39994 0.1-6.0999 6.8-12.7 15.1m-69.7 131.6c-5.0001 10.4-12.8 26.9-17.3 36.8-10.2 22.3-33.9 73.9-43.3 94l-6.9998 15 35.5 0.3c20.2 0.1 35.3 0.6 35.1 1.1-0.19989 0.5-8.4999 10.3-18.4 21.8-19.9 22.8-20.6 23.6-42.6 50.2-17.2 20.7-27.4 33.2-53 64.8-9.7 12-26.1 32.1-36.3 44.8-10.3 12.6-19.9 24.6-21.3 26.5-8.1 10.7-19.6 24.9-19.9 24.6-0.20013-0.2 2.7-6.8 6.6-14.7 3.8-7.9 11.4-24.1 16.9-35.9 5.5-11.8 17.6-37 27-56 9.2998-19 19.5-40.1 22.7-47 3.2-6.9 7.9999-16.9 10.6-22.2 2.7-5.4 4.8999-10 4.8999-10.3s-13.8-0.5-30.7-0.5h-30.7l3-3.3c1.6998-1.7 4.2-4.8 5.4999-6.7 3.4-5 24.2-31.7 40.1-51.5 21.7-27.1 56.5-70.1 65.9-81.5 4.6998-5.8 12.2-15 16.5-20.6 12.7-16.2 38.6-48.4 38.9-48.4 0.20013 0-3.7 8.4-8.7001 18.7"
          />
        </g>
      </svg>
    </>
  );
}
