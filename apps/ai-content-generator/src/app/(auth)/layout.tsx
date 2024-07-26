import BoxPageCenter from '@monor/ui/box-page-center';
type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <BoxPageCenter>{children}</BoxPageCenter>;
};

export default AuthLayout;
