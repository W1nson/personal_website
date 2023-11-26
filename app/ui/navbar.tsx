'use server'; 

import NavLinks from '@/app/ui/navlinks'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { use } from 'react';
import Image from 'next/image'; 

export default async function NavBar() {

  return (
		<div className="flex w-screen flex-col md:flex-row md:overflow-hidden">
      
      <div className="flex w-screen space-x-10 md:space-x-4 flex-row bg-white">
        <div className="flex flex-col w-1/6">
          <div className=''>
            </div> 
          
        </div>
        <NavLinks />
      </div>
      
    </div>
	);
}