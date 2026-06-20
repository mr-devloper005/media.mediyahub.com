"use client";

import { useMemo, useState } from "react";
import { ContentImage } from "@/components/shared/content-image";

const normalizeImageUrl = (value?: string | null) => {
  if (!value || typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith("/")) return trimmed;
  return `/${trimmed.replace(/^\/+/, "")}`;
};

export function TaskImageCarousel({ images }: { images: string[] }) {
  const validImages = useMemo(
    () => images.map((item) => normalizeImageUrl(item)).filter((item): item is string => Boolean(item)),
    [images]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  if (!validImages.length) return null;

  const activeImage = validImages[Math.min(activeIndex, validImages.length - 1)];

  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border bg-muted">
        <ContentImage src={activeImage} alt="Post image" fill className="object-cover" priority />
      </div>
      {validImages.length > 1 ? (
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
          {validImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl border ${
                activeIndex === index ? "border-primary" : "border-border"
              }`}
              aria-label={`Show image ${index + 1}`}
            >
              <ContentImage src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
