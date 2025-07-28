import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";
import AppLayout from '@/components/layout/AppLayout';

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Fametonic - Turn Social Media Into a Profitable Career",
  description: "Join Fametonic to transform your social media presence into a profitable career. Expert-led courses, AI assistance, and personalized insights for aspiring influencers.",
  keywords: ["social media", "influencer", "career", "TikTok", "Instagram", "content creation"],
  authors: [{ name: "Fametonic Team" }],
  openGraph: {
    title: "Fametonic - Social Media Career Platform",
    description: "Turn your social media into a profitable career with expert guidance",
    url: "https://fametonic-web-443.netlify.app",
    siteName: "Fametonic",
    images: [
      {
        url: "/logo-fametonic.png",
        width: 1200,
        height: 630,
        alt: "Fametonic Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fametonic - Social Media Career Platform",
    description: "Turn your social media into a profitable career",
    images: ["/logo-fametonic.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
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
