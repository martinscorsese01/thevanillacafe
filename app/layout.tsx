import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Vanilla Pod | Café Patisserie',
  description: 'Your neighbourhood spot for good coffee, good food and good company.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}





