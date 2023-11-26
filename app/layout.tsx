import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavLinks from '@/app/ui/navlinks'; 
import NavBar from '@/app/ui/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Winson's Portfolio",
  description: "Winson Chen's Personal Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/> 
        <div className='flex flex-col'>
              {children}
            </div>
      </body>
    </html>
  )
}

