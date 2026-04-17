"use client";

import { useEffect, useRef } from "react";
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
  // Стабилизируем routes: сериализуем в строку чтобы dep-массив не видел новый массив каждый рендер
  const routesKey = routes.join(",");
  const routesRef = useRef(routes);
  routesRef.current = routes;

  useEffect(() => {
    const uniqueRoutes = Array.from(new Set(routesRef.current)).filter(Boolean);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [batchDelayMs, batchSize, delayMs, router, routesKey]);

  return null;
}
