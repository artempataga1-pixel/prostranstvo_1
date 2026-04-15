"use client";

interface AnimationActivityOptions {
  node: HTMLElement;
  onActivate: () => void;
  onDeactivate: () => void;
  rootMargin?: string;
}

export function createAnimationActivityController({
  node,
  onActivate,
  onDeactivate,
  rootMargin = "240px",
}: AnimationActivityOptions) {
  let isNearViewport = true;
  let isDocumentVisible = typeof document === "undefined" || document.visibilityState === "visible";
  let isActive = false;

  const sync = () => {
    const nextActive = isNearViewport && isDocumentVisible;
    if (nextActive === isActive) return;

    isActive = nextActive;
    if (isActive) {
      onActivate();
      return;
    }

    onDeactivate();
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      isNearViewport = entry?.isIntersecting ?? false;
      sync();
    },
    { rootMargin },
  );

  observer.observe(node);

  const onVisibilityChange = () => {
    isDocumentVisible = document.visibilityState === "visible";
    sync();
  };

  document.addEventListener("visibilitychange", onVisibilityChange);

  isActive = true;
  onActivate();

  return {
    cleanup() {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (!isActive) return;
      isActive = false;
      onDeactivate();
    },
  };
}
