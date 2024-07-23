import Link from 'next/link';
import { ILogo, INavLink } from '@monor/interfaces';
import { Tooltip, TooltipContent, TooltipTrigger } from './shadcn';
import { cn } from '@monor/utils/tailwind';

type SideBarWithIconsOnlyProps = { children: React.ReactNode };
export const SideBarWithIconsOnly = ({
  children,
}: SideBarWithIconsOnlyProps) => (
  <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
    {children}
  </aside>
);

type LogoProps = { data: ILogo };
export const Logo = ({ data: { url, text, icon } }: LogoProps) => (
  <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
    <Link
      href={url}
      className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
    >
      {icon}
      <span className="sr-only">{text}</span>
    </Link>
  </nav>
);

const currentMenuStyle =
  'flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8';
const menuStyle =
  'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8';
type NavLinksProps = { data: INavLink[]; bottom?: boolean };
export const NavLinks = ({ data, bottom }: NavLinksProps) => (
  <nav
    className={cn(
      'flex flex-col items-center gap-4 px-2 sm:py-4',
      bottom && 'mt-auto'
    )}
  >
    {data.length &&
      data.map(({ url, text, icon }) => (
        <Tooltip key={url}>
          <TooltipTrigger asChild>
            <Link href={url} className={menuStyle}>
              {icon}
              <span className="sr-only">{text}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{text}</TooltipContent>
        </Tooltip>
      ))}
  </nav>
);

type MobileLogoProps = { data: ILogo };
export const MobileLogo = ({ data: { url, icon, text } }: MobileLogoProps) => (
  <Link
    href={url}
    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
  >
    {icon}
    <span className="sr-only">{text}</span>
  </Link>
);
type MobileNavLinksProps = { data: INavLink[] };
export const MobileNavLinks = ({ data }: MobileNavLinksProps) =>
  data.length &&
  data.map(({ url, icon, text }) => (
    <Link
      key={url}
      href={url}
      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
    >
      {icon}
      {text}
    </Link>
  ));
