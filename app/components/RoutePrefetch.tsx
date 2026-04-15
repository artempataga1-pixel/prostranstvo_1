"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface RoutePrefetchProps {
  routes: string[];
  delayMs?: number;
  batchSize?: number;
  batchDelayMs?: number;
}

export default function RoutePrefetch({
  routes,
  delayMs = 150,
  batchSize = 2,
  batchDelayMs = 120,
}: RoutePrefetchProps) {
  const router = useRouter();

  useEffect(() => {
    const uniqueRoutes = Array.from(new Set(routes)).filter(Boolean);
    if (uniqueRoutes.length === 0) return;

    const browserWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;
    let startHandle: number | undefined;
    let disposed = false;
    let queue = [...uniqueRoutes];

    const scheduleNextBatch = () => {
      if (disposed || queue.length === 0) return;

      const runBatch = () => {
        if (disposed) return;

        queue.splice(0, batchSize).forEach((route) => {
          router.prefetch(route);
        });

        if (queue.length === 0 || disposed) return;

        timeoutHandle = window.setTimeout(() => {
          scheduleNextBatch();
        }, batchDelayMs);
      };

      if (browserWindow.requestIdleCallback) {
        idleHandle = browserWindow.requestIdleCallback(runBatch, { timeout: 900 });
      } else {
        runBatch();
      }
    };

    const startPrefetch = () => {
      if (disposed) return;

      uniqueRoutes.slice(0, batchSize).forEach((route) => {
        router.prefetch(route);
      });

      queue = uniqueRoutes.slice(batchSize);

      if (queue.length === 0) return;

      timeoutHandle = window.setTimeout(() => {
        scheduleNextBatch();
      }, batchDelayMs);
    };

    if (browserWindow.requestIdleCallback) {
      startHandle = browserWindow.requestIdleCallback(startPrefetch, { timeout: 700 });
    } else {
      startHandle = window.setTimeout(startPrefetch, delayMs);
    }

    return () => {
      disposed = true;
      if (startHandle !== undefined) {
        if (browserWindow.cancelIdleCallback) {
          browserWindow.cancelIdleCallback(startHandle);
        } else {
          window.clearTimeout(startHandle);
        }
      }
      if (idleHandle !== undefined && browserWindow.cancelIdleCallback) {
        browserWindow.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== undefined) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, [batchDelayMs, batchSize, delayMs, router, routes]);

  return null;
}
