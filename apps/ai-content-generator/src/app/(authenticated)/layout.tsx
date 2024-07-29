import Header from '../../components/header';
import Sidebar from '../../components/sidebar';

type DashboardLayoutProps = { children: React.ReactNode };

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="flex flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
