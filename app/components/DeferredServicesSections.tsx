"use client";

import dynamic from "next/dynamic";
import DeferredViewportMount from "./DeferredViewportMount";

const HomeServicesSectionsClient = dynamic(() => import("./HomeServicesSectionsClient"), {
  ssr: false,
});

function StreamChunkShell({
  background,
  backgroundColor,
  minHeight = "max(100svh, 760px)",
}: {
  background?: string;
  backgroundColor?: string;
  minHeight?: string;
}) {
  return (
    <section
      aria-hidden="true"
      className="split-section"
      style={{
        position: "relative",
        width: "100%",
        minHeight,
        overflow: "clip",
        contentVisibility: "auto",
        containIntrinsicSize: "1000px",
        ...(background ? { background } : {}),
        ...(backgroundColor ? { backgroundColor } : {}),
      }}
    />
  );
}

function ServicesStreamPlaceholder() {
  return (
    <>
      <StreamChunkShell background="linear-gradient(123.5deg, rgb(15, 5, 14) 0.89%, rgb(117, 39, 109) 128.63%)" />
      <StreamChunkShell backgroundColor="#0f050e" />
      <StreamChunkShell backgroundColor="#ffffff" />
      <StreamChunkShell background="linear-gradient(180deg, #ffffff 0%, #f5fdff 100%)" />
      <StreamChunkShell backgroundColor="#071518" />
      <StreamChunkShell backgroundColor="#ffffff" />
      <StreamChunkShell backgroundColor="#ffffff" />
      <StreamChunkShell background="linear-gradient(202.23deg, rgb(13,31,31) 15.55%, rgb(56,133,133) 99.342%)" />
      <StreamChunkShell backgroundColor="#ffffff" />
    </>
  );
}

export default function DeferredServicesSections() {
  return (
    <DeferredViewportMount placeholder={<ServicesStreamPlaceholder />} rootMargin="2400px">
      <HomeServicesSectionsClient />
    </DeferredViewportMount>
  );
}
