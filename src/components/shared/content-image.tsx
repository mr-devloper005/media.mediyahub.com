"use client";

import Image from "next/image";
import { useMemo, type CSSProperties, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContentImageProps = Omit<HTMLAttributes<HTMLDivElement>, "role" | "aria-label" | "aria-hidden"> & {
  src?: string;
  alt: string;
  fill?: boolean;
  quality?: number;
  priority?: boolean;
  intrinsicWidth?: number;
  intrinsicHeight?: number;
  sizes?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
};

export function ContentImage({
  src,
  alt,
  fill,
  className,
  style,
  priority,
  quality,
  intrinsicWidth,
  intrinsicHeight,
  sizes,
  loading,
  fetchPriority,
  ...rest
}: ContentImageProps) {
  const resolvedStyle = useMemo<CSSProperties>(() => {
    if (!fill) return style || {};
    return {
      position: "relative",
      width: "100%",
      height: "100%",
      ...style,
    };
  }, [fill, style]);

  const decorative = !alt.trim();

  if (!src) {
    return (
      <div
        {...rest}
        role={decorative ? "presentation" : undefined}
        aria-hidden={decorative ? true : undefined}
        aria-label={decorative ? undefined : alt}
        className={cn(
          "pointer-events-none select-none bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950",
          className,
        )}
        style={resolvedStyle}
      />
    );
  }

  if (fill) {
    return (
      <div {...rest} className="absolute inset-0 h-full w-full" style={style}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          quality={quality || 75}
          className={cn("object-cover", className)}
          loading={loading}
          fetchPriority={fetchPriority}
        />
      </div>
    );
  }

  return (
    <div {...rest} className={cn("relative", className)} style={resolvedStyle}>
      <Image
        src={src}
        alt={alt}
        width={intrinsicWidth || 800}
        height={intrinsicHeight || 600}
        priority={priority}
        sizes={sizes}
        quality={quality || 75}
        loading={loading}
        fetchPriority={fetchPriority}
      />
    </div>
  );
}
