import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Sidebar from './sidebar';
import { bottomNavLinksData, logoData, navLinksData } from '../constants/nav';

jest.mock('@monor/ui/side-bar-with-icons-only', () => ({
  SideBarWithIconsOnly: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Logo: ({ data }: { data: typeof logoData }) => (
    <div>Logo with {data.text}</div>
  ),
  NavLinks: ({
    data,
    bottom,
  }: {
    data: typeof navLinksData | typeof bottomNavLinksData;
    bottom?: boolean;
  }) => <div>{bottom ? 'Bottom NavLinks' : 'Top NavLinks'}</div>,
}));
describe('sidebar', () => {
  beforeEach(() => {
    render(<Sidebar />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders SideBarWithIconsOnly component', () => {
    expect(screen.getByText(`Logo with ${logoData.text}`)).toBeInTheDocument();
    expect(screen.getByText('Top NavLinks')).toBeInTheDocument();
    expect(screen.getByText('Bottom NavLinks')).toBeInTheDocument();
  });
});
