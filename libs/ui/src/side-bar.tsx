type SidebarProps = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">{children}</div>
  );
};

type SidebarLogoProps = {
  children: React.ReactNode;
};

export const SidebarLogo = ({ children }: SidebarLogoProps) => {
  return (
    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      {children}
    </div>
  );
};
