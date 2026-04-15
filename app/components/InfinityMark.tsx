import type { CSSProperties } from "react";
import Image from "next/image";

interface InfinityMarkProps {
  loading?: "eager" | "lazy";
  src?: string;
  sizes?: string;
  quality?: number;
  mixBlendMode?: CSSProperties["mixBlendMode"];
}

export default function InfinityMark({
  loading = "lazy",
  src = "/infinity.png",
  sizes = "(max-width: 768px) 104px, 242px",
  quality = 75,
  mixBlendMode = "screen",
}: InfinityMarkProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", mixBlendMode }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            width: "206.91%",
            height: "405.54%",
            left: "-52.74%",
            top: "-148.71%",
          }}
        >
          <Image
            alt=""
            src={src}
            fill
            sizes={sizes}
            quality={quality}
            loading={loading}
            decoding="async"
            fetchPriority={loading === "eager" ? "high" : undefined}
            style={{
              objectFit: "fill",
              maxWidth: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
