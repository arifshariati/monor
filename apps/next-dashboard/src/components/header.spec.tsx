import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Header from './header';

// mock the image component from NextJS
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    className,
  }: {
    src: string;
    alt: string;
    className?: string;
  }) => <img src={src} alt={alt} className={className} />,
}));

// moc MobileNav component
jest.mock('./mobile-nav', () => {
  const MobileNavMock = () => <div>MobileNav Component</div>;
  MobileNavMock.displayName = 'MobileNav';
  return MobileNavMock;
});
describe('header', () => {
  beforeEach(() => {
    render(<Header />);
  });
  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders MobileNav component', () => {
    expect(screen.getByText('MobileNav Component')).toBeInTheDocument();
  });

  it('renders Breadcrumb component on medium screens and up', () => {
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('Recent Orders')).toBeInTheDocument();
  });

  it('renders Search icon and Input field', () => {
    const searchIcon = screen.getByTestId('search-icon');
    expect(searchIcon).toBeInTheDocument();
    expect(searchIcon).toHaveClass('h-4 w-4');

    const inputField = screen.getByPlaceholderText(/Search.../i);
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveClass(
      'w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]'
    );
  });

  it('renders DropDownMenu with correct items and Image avatar', () => {
    const dropdownButton = screen.getByRole('button', { name: /Avatar/i });
    expect(dropdownButton).toBeInTheDocument();
    expect(dropdownButton).toHaveClass('overflow-hidden rounded-full');

    const avatarImage = screen.getByRole('img', { name: /Avatar/i });
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', '/images/placeholder-user.jpeg');
    expect(avatarImage).toHaveClass('overflow-hidden rounded-full');
  });
});
