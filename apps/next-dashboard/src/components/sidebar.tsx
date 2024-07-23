import {
  SideBarWithIconsOnly,
  Logo,
  NavLinks,
} from '@monor/ui/side-bar-with-icons-only';
import { logoData, navLinksData, bottomNavLinksData } from '../constants/nav';

const Sidebar = () => {
  return (
    <SideBarWithIconsOnly>
      <Logo data={logoData} />
      <NavLinks data={navLinksData} />
      <NavLinks data={bottomNavLinksData} bottom />
    </SideBarWithIconsOnly>
  );
};

export default Sidebar;
