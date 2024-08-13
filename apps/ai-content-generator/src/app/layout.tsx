import './global.css';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@monor/contexts/theme-provider';
import { TooltipProvider } from '@monor/ui/shadcn/tooltip';
import { inter, lexend } from '@monor/utils/tailwind/fonts';

export const metadata: Metadata = {
  title: 'AI Content Generator',
  description: 'AI Content Generator in NextJS in a Nx monorepo',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning={true} lang="en">
        <body className={`${inter.variable} ${lexend.variable}`}>
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
    </ClerkProvider>
  );
};

export default RootLayout;
