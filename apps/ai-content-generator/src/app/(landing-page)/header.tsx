import Link from 'next/link';
import { Flower, Menu } from 'lucide-react';
import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  Separator,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@monor/ui/shadcn';

const navLinks = [
  { href: '#features', text: 'Features' },
  { href: '#testimonials', text: 'Testimonials' },
  { href: '#pricing', text: 'Pricing' },
];

const HeaderLandingPage = ({ user }: { user: any }) => {
  return (
    <header className="font-lexend sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm md:w-full lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Flower className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map(({ href, text }) => (
              <NavigationMenuItem key={href}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {text}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Flower className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>

            {navLinks.map(({ href, text }) => (
              <Link
                key={href}
                href={href}
                className="text-muted-foreground hover:text-foreground hover:bg-accent px-4 py-2 rounded-md"
              >
                {text}
              </Link>
            ))}

            <Separator />
            <Link href="/sign-up">
              <Button className="w-full">Get started</Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {user ? (
          <Link href="/dashboard">
            <Button>Get me to the app</Button>
          </Link>
        ) : (
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default HeaderLandingPage;
