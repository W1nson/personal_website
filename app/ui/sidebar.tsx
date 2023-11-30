import Link from 'next/link'; 
import Image from 'next/image'; 
import LinkButtons from '@/app/ui/linkbutton';
import { SewingPinFilledIcon } from '@radix-ui/react-icons';

export default async function SideBar() {

	const LinkIcon = SewingPinFilledIcon;
	return(
		<div className='flex flex-col w- h-screen bg-white items-center'>
			
			<Image src='/profile.png' className='p-1 rounded-full ' height={150} width={150} alt='Profile Picture'/>
			<strong className="text-black text-xl">Winson Chen</strong>
			<span className="p-3 text-black text-sm justify-center">New Grad from University of California, Santa Cruz</span>	
			<LinkButtons/>

			
				
		</div>
	);



}