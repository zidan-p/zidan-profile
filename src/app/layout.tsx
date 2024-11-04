import MainLayout from '@/layouts/MainLayout'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/widgets/Navbar'
import { Footer } from '@/widgets/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  viewport: { width: "device-width", initialScale: 1 },
  title: 'Zidan Putra Rahman | Profile',
  description: 'My profile',
  openGraph:{
    type: "profile",
    title: "Zidan Putra Rahman",
    description: "My Profile",
    url: "https://www.zidanputra.my.id",
    siteName: "Zidan Putra Rahman"
  }
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
