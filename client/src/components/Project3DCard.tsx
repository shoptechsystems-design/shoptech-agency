import React, { useState, useRef, useCallback, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  featured: boolean;
}

interface Project3DCardProps {
  project: Project;
}

export function Project3DCard({ project }: Project3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Check if device supports fine pointer (mouse/trackpad vs touch)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const match = window.matchMedia("(pointer: fine)");
      setIsFinePointer(match.matches);
      const listener = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
      match.addEventListener("change", listener);
      return () => match.removeEventListener("change", listener);
    }
  }, []);

  // Throttled mouse move via requestAnimationFrame for silky 60-120fps performance
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isFinePointer || !cardRef.current) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    rafRef.current = requestAnimationFrame(() => {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle rotation bounds (-8 to 8 deg for sleek feel)
      const rotX = ((y - centerY) / centerY) * -8;
      const rotY = ((x - centerX) / centerX) * 8;

      setRotateX(rotX);
      setRotateY(rotY);

      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlarePos({ x: glareX, y: glareY, opacity: 0.45 });
    });
  }, [isFinePointer]);

  const handleMouseEnter = () => {
    if (isFinePointer) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  const webpSrc = project.image.endsWith('.webp') ? project.image : project.image.replace(/\.png$/, '.webp');
  const pngFallback = project.image.replace(/\.webp$/, '.png');

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full"
      style={{
        perspective: isFinePointer ? "1000px" : undefined,
      }}
    >
      <a
        href={project.link || "#"}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noopener noreferrer" : undefined}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md transition-all duration-300 ease-out hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.22)] active:scale-[0.98]"
        style={{
          transform: isFinePointer
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? "scale3d(1.02, 1.02, 1.02)" : "scale3d(1, 1, 1)"}`
            : undefined,
          transformStyle: isFinePointer ? "preserve-3d" : undefined,
          willChange: isHovered ? "transform" : "auto",
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(59, 130, 246, 0.2)"
            : "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Specular glare overlay on fine pointer */}
        {isFinePointer && (
          <div
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle 260px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.2), transparent 70%)`,
            }}
          />
        )}

        {/* Ambient border glow gradient on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Image Frame with 3D Pop & Skeleton Shimmer */}
        <div
          className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 transition-transform duration-300"
          style={{ transform: isFinePointer ? "translateZ(18px)" : undefined }}
        >
          {/* Skeleton Shimmer while loading */}
          <div
            className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900/90 transition-opacity duration-500 ${
              imageLoaded ? "opacity-0 pointer-events-none" : "opacity-100 animate-pulse"
            }`}
          >
            <div className="h-6 w-6 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
            <span className="mt-2 font-mono text-[9px] uppercase tracking-widest text-slate-500">ShopTech Node</span>
          </div>

          <picture className="block h-full w-full">
            <source srcSet={webpSrc} type="image/webp" />
            <img
              src={pngFallback}
              alt={project.title}
              width={400}
              height={208}
              loading="lazy"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              className={`h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110 ${
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/projects/dispatchflow.png";
                setImageLoaded(true);
              }}
            />
          </picture>

          {/* Vignette & bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 pointer-events-none" />

          {/* Floating Category Pill */}
          <div className="absolute left-3.5 top-3.5 sm:left-4 sm:top-4 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/80 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-cyan-400 backdrop-blur-md shadow-lg shadow-black/40">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {project.category}
            </span>
          </div>

          {/* Floating 3D Action Icon */}
          <div
            className="absolute right-3.5 top-3.5 sm:right-4 sm:top-4 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-white shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
            style={{ transform: isFinePointer ? "translateZ(30px)" : undefined }}
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Content Body */}
        <div
          className="flex flex-1 flex-col p-5 sm:p-6 transition-transform duration-300"
          style={{ transform: isFinePointer ? "translateZ(20px)" : undefined }}
        >
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-blue-400">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-slate-500 font-semibold">
              #{String(project.id).padStart(2, "0")}
            </span>
          </div>

          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-3">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/5 pt-3.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] font-medium text-slate-300 transition-colors group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
