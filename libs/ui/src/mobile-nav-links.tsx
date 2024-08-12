'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinkType } from '@monor/types';
import { cn } from '@monor/utils/tailwind';
import { SheetClose } from './shadcn';

type MobileNavLinksProps = {
  data: navLinkType[];
};

const MobileNavLinks = ({ data }: MobileNavLinksProps) => {
  const currentPath = usePathname();
  if (!data.length) return;
  return (
    <SheetClose asChild>
      <nav className="grid gap-2 text-lg font-medium">
        {data.map(({ href, text, icon }) => (
          <SheetClose key={text} asChild>
            <Link
              href={href}
              className={cn(
                'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground',
                currentPath === href && 'bg-muted'
              )}
            >
              {icon && icon}
              {text}
            </Link>
          </SheetClose>
        ))}
      </nav>
    </SheetClose>
  );
};

export default MobileNavLinks;
