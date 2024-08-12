type MobileNavProps = {
  children: React.ReactNode;
};
export const MobileNav = ({ children }: MobileNavProps) => {
  return <nav className="grid gap-2 text-lg font-medium">{children}</nav>;
};

type MobileNavLogoProps = {
  children: React.ReactNode;
};
export const MobileNavLogo = ({ children }: MobileNavLogoProps) => {
  return <div className="flex h-10 items-center border-b">{children}</div>;
};
