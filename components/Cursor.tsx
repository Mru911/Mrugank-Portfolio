"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top  = ring.current.y + "px";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const grow  = () => {
      if (dotRef.current)  dotRef.current.style.transform  = "translate(-50%,-50%) scale(2.5)";
      if (ringRef.current) { ringRef.current.style.width = "58px"; ringRef.current.style.height = "58px"; }
    };
    const shrink = () => {
      if (dotRef.current)  dotRef.current.style.transform  = "translate(-50%,-50%) scale(1)";
      if (ringRef.current) { ringRef.current.style.width = "38px"; ringRef.current.style.height = "38px"; }
    };
    document.querySelectorAll("a,button,.project-card,.skill-badge").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
