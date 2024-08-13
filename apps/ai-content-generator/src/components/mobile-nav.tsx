import { PanelLeft } from 'lucide-react';
import { Button } from '@monor/ui/shadcn/button';
import { Sheet, SheetContent, SheetTrigger } from '@monor/ui/shadcn/sheet';
import { MobileLogo, MobileNavLinks } from '@monor/ui/side-bar-with-icons-only';
import { logoData, navLinksData, bottomNavLinksData } from '../constants/nav';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <MobileLogo data={logoData} />
          <MobileNavLinks data={[...navLinksData, ...bottomNavLinksData]} />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
