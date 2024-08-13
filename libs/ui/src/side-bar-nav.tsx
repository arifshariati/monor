'use client';
import { navLinkType } from '@monor/types/nav-link';
import { cn } from '@monor/utils/tailwind/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarNavProps = {
  data: navLinkType[];
};

export const SidebarNav = ({ data }: SidebarNavProps) => {
  const pathname = usePathname();
  if (!data.length) return;
  return (
    <nav className="flex flex-col  gap-2 px-2 text-sm font-medium lg:px-4">
      {data.map(({ href, text, icon }) => (
        <Link
          key={text}
          href={href}
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
            pathname === href && 'bg-muted text-muted-foreground'
          )}
        >
          {icon && icon}
          {text}
        </Link>
      ))}
    </nav>
  );
};
