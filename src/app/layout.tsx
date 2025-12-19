import type { Metadata } from "next";
import './globals.css';
import { cinzel, tangerine, cormorant } from './fonts';

export const metadata: Metadata = {
  title: "Th Studio",
  description: "Studio de extensão de cílios Thainá Roberta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${cinzel.variable}
          ${tangerine.variable}
          ${cormorant.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
