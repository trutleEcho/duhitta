import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Duhitta - Modern Ethnic Fashion for Women",
    template: "%s | Duhitta"
  },
  description: "Duhitta is a fashion brand made for women by women, offering modern yet ethnic and traditional wear that celebrates cultural heritage with contemporary style.",
  keywords: ["ethnic fashion", "traditional wear", "women's clothing", "modern ethnic", "cultural fashion", "traditional dresses", "ethnic wear", "women's fashion", "cultural clothing", "modern traditional"],
  authors: [{ name: "Duhitta Team" }],
  creator: "Duhitta",
  publisher: "Duhitta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://duhitta.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://duhitta.com',
    siteName: 'Duhitta',
    title: 'Duhitta - Where Modern Meets Tradition',
    description: 'Duhitta is a fashion brand made for women by women, offering modern yet ethnic and traditional wear that celebrates cultural heritage with contemporary style.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Duhitta - Modern Ethnic Fashion for Women',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duhitta - Modern Ethnic Fashion for Women',
    description: 'Duhitta is a fashion brand made for women by women, offering modern yet ethnic and traditional wear that celebrates cultural heritage with contemporary style.',
    images: ['/twitter-image.jpg'],
    creator: '@duhitta',
    site: '@duhitta',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'fashion',
  classification: 'clothing',
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData type="organization" data={{}} />
        <StructuredData type="website" data={{}} />
        {children}
      </body>
    </html>
  );
}
