import { Menu } from 'lucide-react';
import { Button } from './shadcn/button';
import { Sheet, SheetContent, SheetTrigger } from './shadcn/sheet';

type HeaderProps = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      {children}
    </header>
  );
};

type MobileNavSheetProps = {
  children: React.ReactNode;
};
export const MobileNavSheet = ({ children }: MobileNavSheetProps) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      {children}
    </SheetContent>
  </Sheet>
);
