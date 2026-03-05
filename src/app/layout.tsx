import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'iyah.exe',
  icons: {
    icon: '/heart-sparkle.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}