import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@monor/contexts';
import { TooltipProvider } from '@monor/ui/shadcn';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Dashboard',
  description: 'Basic dashboard design in NextJS in a Nx monorepo',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
