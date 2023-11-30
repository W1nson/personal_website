import Link from 'next/link'; 
import Image from 'next/image'; 
import LinkButtons from '@/app/ui/linkbutton';

export default async function SideBar() {

	return(
		<div className='flex flex-col bg-white items-center h-[100%]'>
			
			<Image src='/profile.png' className='p-1 rounded-full border-2 w-[175px]' height={1084} width={724} alt='Profile Picture'/>
			<strong className="text-black text-xl">Winson Chen</strong>
			<span className="p-3 text-black text-sm text-center">New Grad from University of California, Santa Cruz</span>	
			<LinkButtons/>

			
				
		</div>
	);



}