import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { TooltipProvider } from './shadcn';
import {
  SideBarWithIconsOnly,
  Logo,
  NavLinks,
  MobileLogo,
  MobileNavLinks,
} from './side-bar-with-icons-only';

const sampleLogoData = {
  url: '/dashboard',
  text: 'Dashboard',
  slug: 'D',
  icon: <svg data-testid="logo-icon">icon</svg>,
};

const sampleNavLinksData = [
  {
    url: '/dashboard',
    text: 'Dashboard',
    slug: 'D',
    icon: <svg data-testid="dashboard-icon">icon</svg>,
  },
  {
    url: '/about',
    text: 'About',
    slug: 'D',
    icon: <svg data-testid="about-icon">icon</svg>,
  },
  {
    url: '/contact',
    text: 'Contact',
    slug: 'D',
    icon: <svg data-testid="contact-icon">icon</svg>,
  },
];

// Render the component with NextJS context
const renderWithNextLink = (component: React.ReactNode) => {
  render(component);
};

// Custom render function to include TooltipProvider
const renderWithTooltipProvider = (ui: React.ReactNode) => {
  return render(<TooltipProvider>{ui}</TooltipProvider>);
};
describe('SideBarWithIconsOnly', () => {
  const childrenText = 'Test Children';
  beforeEach(() => {
    render(<SideBarWithIconsOnly>{childrenText}</SideBarWithIconsOnly>);
  });
  afterEach(() => cleanup());

  it('renders children correctly', () => {
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });
  it('has the correct classes applied', () => {
    const asideElement = screen.getByRole('complementary');
    expect(asideElement).toHaveClass(
      'fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'
    );
  });
});

describe('Logo', () => {
  beforeEach(() => {
    renderWithNextLink(<Logo data={sampleLogoData} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('navigates to the correct URL', () => {
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', sampleLogoData.url);
  });

  it('renders icon correctly', () => {
    const iconElement = screen.getByTestId('logo-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders the text in a visually hidden span', () => {
    const spanElement = screen.getByText(sampleLogoData.text);
    expect(spanElement).toHaveClass('sr-only');
  });
});

describe('NavLinks', () => {
  afterEach(() => {
    cleanup();
  });

  it('applies the correct classes to the nav element', () => {
    const { container } = renderWithTooltipProvider(
      <NavLinks data={sampleNavLinksData} />
    );
    const navElement = container.querySelector('nav');
    expect(navElement).toHaveClass(
      'flex flex-col items-center gap-4 px-2 sm:py-4'
    );
  });

  it('applies the correct classes to the nav element when bottom prop is true', () => {
    const { container } = renderWithTooltipProvider(
      <NavLinks data={sampleNavLinksData} bottom />
    );
    const navElement = container.querySelector('nav');
    expect(navElement).toHaveClass(
      'flex flex-col items-center gap-4 px-2 sm:py-4 mt-auto'
    );
  });

  it('renders the correct number of navigation links', () => {
    renderWithTooltipProvider(<NavLinks data={sampleNavLinksData} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(sampleNavLinksData.length);
  });

  it('renders each link with the correct URL, icon and text', () => {
    renderWithTooltipProvider(<NavLinks data={sampleNavLinksData} />);
    sampleNavLinksData.forEach(({ url, text }, index) => {
      const linkElement = screen.getAllByRole('link')[index];
      expect(linkElement).toHaveAttribute('href', url);
      expect(
        screen.getByTestId(`${text.toLowerCase()}-icon`)
      ).toBeInTheDocument();
      expect(screen.getByText(text)).toHaveClass('sr-only');
    });
  });

  it('displays the correct tooltip text for each link', () => {
    renderWithTooltipProvider(<NavLinks data={sampleNavLinksData} />);
    sampleNavLinksData.forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});

describe('MobileLogo', () => {
  beforeEach(() => {
    render(<MobileLogo data={sampleLogoData} />);
  });
  afterEach(() => {
    cleanup();
  });

  it('applies the correct URL and classes to the Link element', () => {
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', sampleLogoData.url);
    expect(linkElement).toHaveClass(
      'group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
    );
  });

  it('renders the correct icon', () => {
    const iconElement = screen.getByTestId('logo-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders the correct visually hidden text', () => {
    const textElement = screen.getByText(sampleLogoData.text);
    expect(textElement).toHaveClass('sr-only');
  });
});

describe('MobileNavLinks', () => {
  beforeEach(() => {
    render(<MobileNavLinks data={sampleNavLinksData} />);
  });
  afterEach(() => {
    cleanup();
  });

  it('renders the correct number of links', () => {
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(sampleNavLinksData.length);
  });

  it('renders each link with correct URL, icon and text', () => {
    sampleNavLinksData.forEach(({ url, text }, index) => {
      const linkElement = screen.getAllByRole('link')[index];
      expect(linkElement).toHaveAttribute('href', url);
      expect(
        screen.getByTestId(`${text.toLowerCase()}-icon`)
      ).toBeInTheDocument();
      expect(linkElement).toHaveTextContent(text);
    });
  });

  it('applies the correct classes to each link', () => {
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveClass(
        'flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
      );
    });
  });
});
