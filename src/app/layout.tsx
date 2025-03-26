import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './override.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CBRL',
  description: 'Clinical Biomarkers Research Laboratory',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.className} transition-colors duration-300 bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Navigation />
          <main className="flex-grow pt-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 