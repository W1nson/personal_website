import NavLinks from '@/app/ui/navlinks'

export default function NavBar() {
	return (
		<div className="flex w-screen flex-col md:flex-row md:overflow-hidden">
          <div className="flex w-screen space-x-10 md:space-x-4 flex-row bg-white">
            <NavLinks />
          </div>
        </div>
	);
}