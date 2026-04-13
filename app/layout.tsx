import type { Metadata } from "next";
import "./globals.css";
import { ScrollAnimations } from "./components/ScrollAnimations";

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
        <ScrollAnimations />
      </body>
    </html>
  );
}
