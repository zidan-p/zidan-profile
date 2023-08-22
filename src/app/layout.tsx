import MainLayout from '@/layouts/MainLayout'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/widgets/Navbar'
import { Footer } from '@/widgets/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zidan Putra Rahman.document',
  description: 'My profile'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout
          contentSlot={children}
          navBarSlot={<NavBar />} 
          footerSlot={<Footer />}
        />
      </body>
    </html>
  )
}
