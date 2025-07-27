import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";
import AppLayout from '@/components/layout/AppLayout';

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fametonic",
  description: "A modern web application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${urbanist.variable} antialiased`}
      >
       <AppLayout>
         {children}
       </AppLayout>
      </body>
    </html>
  );
}
