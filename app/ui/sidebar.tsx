import Link from 'next/link'; 
import Image from 'next/image'; 
import LinkButtons from '@/app/ui/linkbutton';

export default async function SideBar() {


	return(
		<div className='flex flex-col w- h-screen bg-white items-center'>
			
			<Image src='/profile.png' className='p-1 rounded-full' height={150} width={150} alt='Profile Picture'/>
			<strong className="text-black text-xl">Winson Chen</strong>

			
			<LinkButtons/>
			
				
		</div>
	);



}