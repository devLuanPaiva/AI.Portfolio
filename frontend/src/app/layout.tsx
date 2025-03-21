import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";


export const metadata: Metadata = {
  title: "Desenvolvedor Luan Paiva",
  description: "Portfolio com agentes de IA",
};

const montserrat = Montserrat({ subsets: ['latin'], display: "swap" })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
