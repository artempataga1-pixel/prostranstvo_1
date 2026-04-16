import type { Metadata } from "next";
import "./globals.css";
import RoutePrefetch from "./components/RoutePrefetch";
import { ScrollAnimationsOptimized } from "./components/ScrollAnimationsOptimized";
import SectionAnimationPause from "./components/SectionAnimationPause";

export const metadata: Metadata = {
  title: "PROстранство — Получить разбор",
  description: "Превращаем хаос на маркетплейсах в управляемую модель роста",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <body>
        {children}
        <RoutePrefetch
          routes={["/form"]}
          delayMs={1200}
          batchSize={1}
          batchDelayMs={0}
        />
        <ScrollAnimationsOptimized />
        <SectionAnimationPause />
      </body>
    </html>
  );
}
