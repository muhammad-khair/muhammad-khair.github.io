import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Khair's Portfolio",
  description: 'Portfolio of Muhammad Khair',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} bg-vscode-bg text-vscode-text font-mono h-full m-0 p-0 overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}
