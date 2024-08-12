import './global.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@monor/contexts';
import { TooltipProvider } from '@monor/ui/shadcn';
import { inter, lexend } from '@monor/utils/tailwind/fonts';

export const metadata: Metadata = {
  title: 'Banking',
  description: 'Banking application with NextJs',
};

type GlobalLayoutProps = {
  children: React.ReactNode;
};

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
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
  );
};

export default GlobalLayout;
