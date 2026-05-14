import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Murple | Next Level Online Casino Entertainment",
  description: "Murple provides customers with the very best in certified iGaming content. From trademarked slots to jackpots, table games, and instant wins.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
