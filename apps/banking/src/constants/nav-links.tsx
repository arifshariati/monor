import { ArrowRightLeft, Home, Landmark, SendHorizonal } from 'lucide-react';
import { navLinkType } from '@monor/types/nav-link';

export const navLinks: navLinkType[] = [
  {
    href: '/',
    text: 'Home',
    icon: <Home />,
  },
  {
    href: '/my-banks',
    text: 'My Banks',
    icon: <Landmark />,
  },
  {
    href: '/transaction-history',
    text: 'Transaction History',
    icon: <ArrowRightLeft />,
  },
  {
    href: '/transfer-funds',
    text: 'Transfer Funds',
    icon: <SendHorizonal />,
  },
];
