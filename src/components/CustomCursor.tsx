"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let rx = 0, ry = 0;
    let x = 0, y = 0;
    let animId: number;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      setVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x - 6}px`;
        cursorRef.current.style.top = `${y - 6}px`;
      }
    };

    const animate = () => {
      rx += (x - rx) * 0.1;
      ry += (y - ry) * 0.1;
      if (followerRef.current) {
        followerRef.current.style.left = `${rx - 18}px`;
        followerRef.current.style.top = `${ry - 18}px`;
      }
      animId = requestAnimationFrame(animate);
    };

    const handleEnter = () => {
      if (followerRef.current) {
        followerRef.current.style.transform = "scale(1.8)";
        followerRef.current.style.borderColor = "rgba(0, 212, 170, 0.8)";
      }
    };
    const handleLeave = () => {
      if (followerRef.current) {
        followerRef.current.style.transform = "scale(1)";
        followerRef.current.style.borderColor = "rgba(108, 99, 255, 0.6)";
      }
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
