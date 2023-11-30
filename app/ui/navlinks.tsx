'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Winson', href: '/', image: ''},
  { name: 'About Me', href: '/aboutme'},
  { name: 'Publications', href: '/publications',},
  { name: 'CV', href: '/CV'},
  { name: 'Tutoring', href: '/tutoring'},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={ clsx(
              "flex h-[50px] items-center justify-center text-black font-medium md:flex md:justify-center md:p-2 md:px-3",
              {
                'bg-sky-100 text-black': pathname === link.href,
              },
            )}
              >
            <span className="md:block text-black hover:underline">{link.name}</span>

          </Link>
        );
      })}
    </>
  );
}
