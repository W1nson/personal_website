import { Button } from '@/app/ui/button'; 
import Image from 'next/image'; 
import Link from 'next/link'; 
import { SewingPinFilledIcon, EnvelopeClosedIcon, LinkedInLogoIcon,  GitHubLogoIcon, PersonIcon} from '@radix-ui/react-icons';

const links = [
	{ name: 'Fremont, CA', href: '', icon: SewingPinFilledIcon},
	{ name: 'Email', href: 'winsonchen108@gmail.com', icon: EnvelopeClosedIcon},
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/winson-chen-75aab71b8/', icon: LinkedInLogoIcon},
	{ name: 'Github', href: 'https://github.com/W1nson', icon: GitHubLogoIcon},
	{ name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=RhM7lloAAAAJ&hl=en', icon: PersonIcon},
  ];
export default function LinkButtons() {

	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon; 
				return(
					<Link 
						key={link.name}
						href={link.href}
						className="flex h-[25px] items-center justify-center text-black font-medium md:flex md:justify-center md:p-2 md:px-3"
					>
						<LinkIcon className='w-6'/>
						<span className="md:block text-black hover:underline text-sm">{link.name}</span>
					</Link>);
					})};
		</>


	);
}

