import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import MobileNav from './mobile-nav';
import { bottomNavLinksData, logoData, navLinksData } from '../constants/nav';

jest.mock('@monor/ui/shadcn/button', () => ({
  Button: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <button className={className}>{children}</button>,
}));
jest.mock('@monor/ui/shadcn/sheet', () => ({
  Sheet: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetContent: ({
    side,
    className,
    children,
  }: {
    side: string;
    className?: string;
    children: React.ReactNode;
  }) => <div className={className}>{children}</div>,
  SheetTrigger: ({
    asChild,
    children,
  }: {
    asChild?: boolean;
    children: React.ReactNode;
  }) => <div>{children}</div>,
}));

jest.mock('@monor/ui/side-bar-with-icons-only', () => ({
  MobileLogo: ({ data }: { data: typeof logoData }) => (
    <div>Mobile Logo with {data.text}</div>
  ),
  MobileNavLinks: ({
    data,
  }: {
    data: typeof navLinksData | typeof bottomNavLinksData;
  }) => (
    <div>
      {data.map((link) => (
        <div key={link.url}>{link.text}</div>
      ))}
    </div>
  ),
}));
describe('mobile-nav', () => {
  beforeEach(() => {
    render(<MobileNav />);
  });
  afterEach(() => {
    cleanup();
  });

  it('renders the Sheet component and its children', () => {
    expect(
      screen.getByRole('button', { name: /Toggle Menu/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(`Mobile Logo with ${logoData.text}`)
    ).toBeInTheDocument();

    navLinksData.concat(bottomNavLinksData).forEach((link) => {
      expect(screen.getByText(link.text)).toBeInTheDocument();
    });
  });

  it('renders button with correct class and accessibility attributes', () => {
    const button = screen.getByRole('button', { name: /Toggle Menu/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('sm:hidden');
  });

  it('renders the PanelLest icon inside the Button', () => {
    const button = screen.getByRole('button', { name: /Toggle Menu/i });
    const icon = button.querySelector('.h-5.w-5');
    expect(icon).toBeInTheDocument();
  });
});
