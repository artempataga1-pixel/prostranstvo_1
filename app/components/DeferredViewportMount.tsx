"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface DeferredViewportMountProps {
  children: ReactNode;
  placeholder?: ReactNode;
  rootMargin?: string;
}

export default function DeferredViewportMount({
  children,
  placeholder = <div style={{ width: "100%", height: "100%" }} aria-hidden="true" />,
  rootMargin = "320px",
}: DeferredViewportMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shouldRender) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      {shouldRender ? children : placeholder}
    </div>
  );
}
