import { useEffect, useRef } from "react";

export function Starfield() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const node = canvas.current;
    if (!node) return;
    const context = node.getContext("2d");
    if (!context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0,
      height = 0,
      frame = 0,
      previous = 0;
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 1500 + 1,
    }));
    const resize = () => {
      width = node.width = window.innerWidth;
      height = node.height = window.innerHeight;
    };
    const draw = (time: number) => {
      const delta = previous ? Math.min(time - previous, 50) / 16.67 : 1;
      previous = time;
      context.clearRect(0, 0, width, height);
      for (const star of stars) {
        if (!motion.matches) star.z -= 0.5 * delta;
        if (star.z < 1) star.z = 1500;
        const scale = 300 / star.z;
        context.fillStyle = `rgba(255,255,255,${(1 - star.z / 1500) * 0.8})`;
        context.beginPath();
        context.arc(
          (star.x - 0.5) * width * 2 * scale + width / 2,
          (star.y - 0.5) * height * 2 * scale + height / 2,
          Math.max(0.3, scale),
          0,
          Math.PI * 2,
        );
        context.fill();
      }
      if (!motion.matches && !document.hidden)
        frame = requestAnimationFrame(draw);
    };
    const restart = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      draw(0);
    };
    resize();
    restart();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", restart);
    motion.addEventListener("change", restart);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", restart);
      motion.removeEventListener("change", restart);
    };
  }, []);
  return (
    <canvas
      ref={canvas}
      id="starfield"
      className="starfield"
      aria-hidden="true"
    />
  );
}
