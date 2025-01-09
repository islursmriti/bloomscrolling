import { Inter } from 'next/font/google'
import PageLayout from './components/PageLayout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bloom - Reinventing Social Media for Good',
  description: 'Transform your social media experience with Bloom. Engage with meaningful content and foster positive connections.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  )
}

