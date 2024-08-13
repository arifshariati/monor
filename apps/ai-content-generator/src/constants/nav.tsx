import {
  Flower,
  Home,
  LineChart,
  History,
  Settings,
  Users2,
  NotepadTextDashed,
} from 'lucide-react';
import { ILogo, INavLink } from '@monor/interfaces/nave-types.interface';
export const logoData: ILogo = {
  text: 'NextJS Dashboard',
  slug: 'ND',
  url: '/',
  icon: <Flower className="h-4 w-4 transition-all group-hover:scale-110" />,
};
export const navLinksData: INavLink[] = [
  {
    text: 'Dashboard',
    slug: 'D',
    url: '/dashboard',
    icon: <Home className="h-5 w-5" />,
  },
  {
    text: 'Template',
    slug: 'template',
    url: '/template',
    icon: <NotepadTextDashed className="h-5 w-5" />,
  },
  {
    text: 'History',
    slug: 'H',
    url: '/history',
    icon: <History className="h-5 w-5" />,
  },
  {
    text: 'Customers',
    slug: 'C',
    url: '/customers',
    icon: <Users2 className="h-5 w-5" />,
  },
  {
    text: 'Analytics',
    slug: 'A',
    url: '/analytics',
    icon: <LineChart className="h-5 w-5" />,
  },
];
export const bottomNavLinksData: INavLink[] = [
  {
    text: 'Settings',
    slug: 'D',
    url: '/settings',
    icon: <Settings className="h-5 w-5" />,
  },
];
