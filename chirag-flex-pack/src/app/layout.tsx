import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './fallback.css'
import { ownerData } from '@/data/ownerData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: `${ownerData.companyName} - Manufacturers & Exporters of Plastic Bags`,
    template: `%s | ${ownerData.companyName}`
  },
  description: ownerData.description,
  keywords: [
    'plastic bags',
    'industrial liners',
    'garbage bags',
    'synthetic book covers',
    'packaging solutions',
    'manufacturers',
    'exporters',
    'Vadodara',
    'Gujarat',
    'India'
  ],
  authors: [{ name: ownerData.contactPerson }],
  creator: ownerData.companyName,
  publisher: ownerData.companyName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chiragflexpack.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chiragflexpack.com',
    title: `${ownerData.companyName} - Manufacturers & Exporters of Plastic Bags`,
    description: ownerData.description,
    siteName: ownerData.companyName,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${ownerData.companyName} - Plastic Bags Manufacturer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ownerData.companyName} - Manufacturers & Exporters of Plastic Bags`,
    description: ownerData.description,
    images: ['/og-image.jpg'],
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
