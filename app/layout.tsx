import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavLinks from '@/app/ui/navlinks'; 
import NavBar from '@/app/ui/navbar';
import SideBar from '@/app/ui/sidebar'; 

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

        <div className="relative flex flex-col">
          <div className="sticky top-0 flex w-screen flex-row">
            <NavBar/> 
          </div> 
          <div className='grid grid-cols-7 gap-4 h-screen'>
            <div className='col-span-1 '>
              <SideBar/>
            </div>
            <div className='col-span-6 pt-4 pr-4'>
              {children}
            </div>
          </div>
        </div>      
      </body>
    </html>
  )
}

