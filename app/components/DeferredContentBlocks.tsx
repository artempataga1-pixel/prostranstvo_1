"use client";

import dynamic from "next/dynamic";
import DeferredViewportMount from "./DeferredViewportMount";

const OrbitalCasesTimeline = dynamic(() => import("./OrbitalCasesTimeline"), { ssr: false });
const ContactsSection = dynamic(() => import("./ContactsSection"), { ssr: false });

function OrbitalPlaceholder() {
  return <div style={{ width: "100%", height: "clamp(310px, 58vw, 560px)" }} aria-hidden="true" />;
}

function ContactsPlaceholder() {
  return <div style={{ width: "100%", minHeight: "max(100svh, 720px)" }} aria-hidden="true" />;
}

export function DeferredOrbitalCasesTimeline() {
  return (
    <DeferredViewportMount placeholder={<OrbitalPlaceholder />} rootMargin="520px">
      <OrbitalCasesTimeline />
    </DeferredViewportMount>
  );
}

export function DeferredContactsSection() {
  return (
    <DeferredViewportMount placeholder={<ContactsPlaceholder />} rootMargin="900px">
      <ContactsSection />
    </DeferredViewportMount>
  );
}
