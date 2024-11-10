import type { Metadata } from 'next'
import localFont from 'next/font/local'
import React from 'react'

import './globals.css'

const inter = localFont({
  src: './fonts/interVF.ttf',
  variable: '--font-inter',
  weight: '100 200 300 400 500 600 700 800 900',
})

const SpaceGrotesk = localFont({
  src: './fonts/SpaceGroteskVF.ttf',
  variable: '--font-space-grotesk',
  weight: '100 200 300 400 500 600 700',
})

const zagzookFont = localFont({
  src: './fonts/Zagzook-Regular.ttf',
  variable: '--font-Zagzook-Regular',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Zagzook Games',
  description:
    'Sharpen your mind with our collection of engaging brain games! From sudoku to cross sums and other number grid challenges, our site offers a variety of puzzles to enhance cognitive skills and keep your brain active. Perfect for puzzle enthusiasts of all levels, enjoy hours of mental exercise with fun, accessible, and free online games.',
  icons: { icon: '/images/logo.png' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${SpaceGrotesk.variable}  ${zagzookFont.variable} antialiased`}>{children}</body>
    </html>
  )
}
