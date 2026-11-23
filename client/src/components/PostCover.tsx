import { useState } from "react";
import { postImage } from "@/data/post-images";

/** Lazy-loaded blog cover with a reserved aspect ratio (no layout shift) and a quiet fallback if the image fails. */
export function PostCover({ slug, width = 800, eager = false, sizes, className = "" }: { slug: string; width?: number; eager?: boolean; sizes?: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const img = postImage(slug, width);
  return (
    <div className={`aspect-video w-full overflow-hidden bg-slate-100 ${className}`}>
      {img && !failed && (
        <img
          src={img.src}
          srcSet={img.srcSet}
          sizes={sizes ?? "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"}
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
    </div>
  );
}
