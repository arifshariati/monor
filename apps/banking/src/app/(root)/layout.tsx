import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Vault } from 'lucide-react';
import { Sidebar, SidebarLogo } from '@monor/ui/side-bar';
import { Header, MobileNavSheet } from '@monor/ui/header';
import { MobileNavLogo } from '@monor/ui/mobile-nav';
import { SidebarNav } from '@monor/ui/side-bar-nav';
import MobileNavLinks from '@monor/ui/mobile-nav-links';
import ModeToggle from '@monor/ui/mode-toggle';
import { navLinks } from '../../constants/nav-links';
import { getLoggedInUsers } from '../../actions/auth.actions';
import UserBox from '../../components/user-box';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 font-semibold">
    <Vault className="h-6 w-6" />
    <span className="">Banking</span>
  </Link>
);

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  const loggedIn = await getLoggedInUsers();
  if (!loggedIn) redirect('/sign-in');

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block px-2 lg:px-4">
        <Sidebar>
          <SidebarLogo>
            <Logo />
          </SidebarLogo>
          <div className="flex flex-col flex-1 gap-4 ">
            <SidebarNav data={navLinks} />
            <UserBox
              name={loggedIn.firstName}
              email={loggedIn.email}
              logOutButton
            />
          </div>
        </Sidebar>
      </div>
      <div className="flex flex-col">
        <Header>
          <MobileNavSheet>
            <MobileNavLogo>
              <Logo />
            </MobileNavLogo>
            <MobileNavLinks data={navLinks} />
            <UserBox
              name={loggedIn.firstName}
              email={loggedIn.email}
              logOutButton
            />
          </MobileNavSheet>
          <div className="flex gap-4 items-center ml-auto">
            <ModeToggle />
          </div>
        </Header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
