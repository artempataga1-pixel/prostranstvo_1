"use client";

import dynamic from "next/dynamic";
import DeferredViewportMount from "./DeferredViewportMount";

const Cube3D = dynamic(() => import("./Cube3D"), { ssr: false });
const NeuralNet3D = dynamic(() => import("./NeuralNet3D"), { ssr: false });
const CRM3D = dynamic(() => import("./CRM3D"), { ssr: false });
const Warehouse3D = dynamic(() => import("./Warehouse3D"), { ssr: false });

function ScenePlaceholder() {
  return <div style={{ width: "100%", height: "100%" }} aria-hidden="true" />;
}

// Сцены уже содержат мобильные оптимизации: DPR 1.1 (vs 1.5 desktop), меньше частиц.
// DeferredViewportMount откладывает монтирование до появления в viewport.

export function DeferredCube3D() {
  return (
    <DeferredViewportMount placeholder={<ScenePlaceholder />} rootMargin="320px">
      <Cube3D />
    </DeferredViewportMount>
  );
}

export function DeferredNeuralNet3D() {
  return (
    <DeferredViewportMount placeholder={<ScenePlaceholder />} rootMargin="320px">
      <NeuralNet3D />
    </DeferredViewportMount>
  );
}

export function DeferredCRM3D() {
  return (
    <DeferredViewportMount placeholder={<ScenePlaceholder />} rootMargin="320px">
      <CRM3D />
    </DeferredViewportMount>
  );
}

export function DeferredWarehouse3D() {
  return (
    <DeferredViewportMount placeholder={<ScenePlaceholder />} rootMargin="320px">
      <Warehouse3D />
    </DeferredViewportMount>
  );
}
