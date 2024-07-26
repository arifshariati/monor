import {
  Logo,
  NavLinks,
  SideBarWithIconsOnly,
} from '@monor/ui/side-bar-with-icons-only';
import { logoData, navLinksData, bottomNavLinksData } from '../constants/nav';

const Sidebar = () => {
  return (
    <SideBarWithIconsOnly>
      <Logo data={logoData} />
      <NavLinks data={navLinksData} />
      <NavLinks data={bottomNavLinksData} bottom />
      <h1>Arif</h1>
    </SideBarWithIconsOnly>
  );
};

export default Sidebar;
