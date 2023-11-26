'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/home'},
  { name: 'About Me', href: '/aboutme'},
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
              "flex h-[48px] grow items-center justify-center gap-100 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
              >
            <p className="hidden md:block text-gray-900">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
