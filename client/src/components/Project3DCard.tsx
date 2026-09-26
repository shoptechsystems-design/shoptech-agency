import React, { useState, useRef } from "react";
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
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-10 to 10 deg)
    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);

    // Calculate glare position in percent
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.5 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full transition-transform duration-300 ease-out"
      style={{
        perspective: "1200px",
      }}
    >
      <a
        href={project.link || "#"}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noopener noreferrer" : undefined}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 ease-out hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.25)]"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? "scale3d(1.02, 1.02, 1.02)" : "scale3d(1, 1, 1)"}`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(59, 130, 246, 0.2)"
            : "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Specular glare overlay following mouse */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.18), transparent 70%)`,
          }}
        />

        {/* Ambient border glow gradient on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Image Frame with 3D Pop */}
        <div
          className="relative h-52 overflow-hidden bg-slate-950/80 transition-transform duration-300"
          style={{ transform: "translateZ(20px)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-108 group-hover:brightness-110"
            onError={(e) => {
              // fallback if any image network issue occurs
              (e.currentTarget as HTMLImageElement).src = "/projects/dispatchflow.png";
            }}
          />

          {/* Vignette & bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

          {/* Floating Category Pill */}
          <div className="absolute left-4 top-4 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-400 backdrop-blur-md shadow-lg shadow-black/40">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {project.category}
            </span>
          </div>

          {/* Floating 3D Action Icon */}
          <div
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-white shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
            style={{ transform: "translateZ(35px)" }}
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Content Body with 3D Depth */}
        <div
          className="flex flex-1 flex-col p-6 transition-transform duration-300"
          style={{ transform: "translateZ(25px)" }}
        >
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-blue-400">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-slate-500 font-semibold">
              #{String(project.id).padStart(2, "0")}
            </span>
          </div>

          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-300"
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
