import React, { useState, useRef, useEffect, memo } from "react";
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
  kind?: "live" | "concept";
}

interface Project3DCardProps {
  project: Project;
  priority?: boolean;
}

// Global cache to track images that have successfully loaded in the session
// Prevents skeleton flashes or opacity transitions on re-renders, filter switches, or back navigation
const loadedImagesCache = new Set<string>();

export const Project3DCard = memo(function Project3DCard({
  project,
  priority = false,
}: Project3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerCardRef = useRef<HTMLAnchorElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);

  const webpSrc = project.image.endsWith(".webp")
    ? project.image
    : project.image.replace(/\.png$/, ".webp");

  // Synchronously check if this image was already loaded
  const [imageLoaded, setImageLoaded] = useState(() => loadedImagesCache.has(webpSrc));
  const isFinePointer = useRef(true);

  // Check device fine pointer capability once on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const match = window.matchMedia("(pointer: fine)");
      isFinePointer.current = match.matches;
      const listener = (e: MediaQueryListEvent) => {
        isFinePointer.current = e.matches;
      };
      match.addEventListener("change", listener);
      return () => match.removeEventListener("change", listener);
    }
  }, []);

  // Handle cached images that might have completed before event listener attached
  useEffect(() => {
    if (loadedImagesCache.has(webpSrc)) {
      setImageLoaded(true);
      return;
    }
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      loadedImagesCache.add(webpSrc);
      setImageLoaded(true);
    }
  }, [webpSrc]);

  // Read rect ONCE on mouseenter instead of layout-thrashing on every pixel move
  const handleMouseEnter = () => {
    if (!isFinePointer.current || !cardRef.current) return;
    rectRef.current = cardRef.current.getBoundingClientRect();
  };

  // High-performance direct style manipulation via rAF - ZERO React re-renders!
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isFinePointer.current) return;

    if (!rectRef.current && cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
    const rect = rectRef.current;
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle rotation bounds (-7 to 7 deg for sleek feel)
      const rotX = ((y - centerY) / centerY) * -7;
      const rotY = ((x - centerX) / centerX) * 7;

      if (innerCardRef.current) {
        innerCardRef.current.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
      }

      if (glareRef.current) {
        const glareX = ((x / rect.width) * 100).toFixed(1);
        const glareY = ((y / rect.height) * 100).toFixed(1);
        glareRef.current.style.opacity = "0.4";
        glareRef.current.style.background = `radial-gradient(circle 260px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.2), transparent 70%)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rectRef.current = null;

    if (innerCardRef.current) {
      innerCardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
  };

  const onImageLoad = () => {
    loadedImagesCache.add(webpSrc);
    setImageLoaded(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full project-card-contain"
      style={{ perspective: "1000px" }}
    >
      <a
        ref={innerCardRef}
        href={project.link || undefined}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noopener noreferrer" : undefined}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-transform duration-200 ease-out hover:border-teal-600/40 hover:shadow-[0_20px_50px_rgba(15,118,110,0.22)] active:scale-[0.98]"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Specular glare overlay */}
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-300"
        />

        {/* Ambient border glow gradient on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-teal-500/10 via-transparent to-teal-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Image Frame with Skeleton Shimmer */}
        <div
          className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-50"
          style={{ transform: "translateZ(15px)" }}
        >
          {/* Skeleton Shimmer while loading */}
          {!imageLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white animate-pulse">
              <div className="h-5 w-5 rounded-full border-2 border-teal-600/40 border-t-cyan-400 animate-spin" />
              <span className="mt-2 font-mono text-[9px] uppercase tracking-widest text-slate-500">ShopTech Node</span>
            </div>
          )}

          <picture className="block h-full w-full">
            <source srcSet={webpSrc} type="image/webp" />
            <img
              ref={imgRef}
              src={webpSrc}
              alt={project.title}
              width={600}
              height={315}
              loading={priority ? "eager" : "lazy"}
              // @ts-expect-error fetchPriority supported in modern browsers
              fetchpriority={priority ? "high" : "auto"}
              decoding="async"
              onLoad={onImageLoad}
              className={`h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-110 ${
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes("dispatchflow.webp")) {
                  target.src = "/projects/dispatchflow.webp";
                }
                onImageLoad();
              }}
            />
          </picture>

          {/* Vignette & bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-85 pointer-events-none" />

          {/* Floating Category Pill */}
          <div className="absolute left-3.5 top-3.5 sm:left-4 sm:top-4 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-slate-50 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-teal-700 shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
              {project.category}
            </span>
            <span className={`ml-2 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-md ${project.kind === "live" ? "bg-emerald-500 text-white" : "bg-slate-700 text-white"}`}>
              {project.kind === "live" ? "Live" : "Concept"}
            </span>
          </div>

          {/* Floating 3D Action Icon */}
          {project.link && <div
            className="absolute right-3.5 top-3.5 sm:right-4 sm:top-4 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-md transition-all duration-200 group-hover:scale-110 group-hover:border-teal-600/40 group-hover:bg-teal-700 group-hover:text-white"
            style={{ transform: "translateZ(25px)" }}
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>}
        </div>

        {/* Content Body */}
        <div
          className="flex flex-1 flex-col p-5 sm:p-6"
          style={{ transform: "translateZ(16px)" }}
        >
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 transition-colors duration-150 group-hover:text-teal-700">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-slate-500 font-semibold">
              #{String(project.id).padStart(2, "0")}
            </span>
          </div>

          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors line-clamp-3">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] font-medium text-slate-700 transition-colors group-hover:border-teal-600/40 group-hover:bg-teal-50 group-hover:text-teal-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
});
