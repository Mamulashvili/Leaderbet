import { useState } from 'react';
import { Accordion } from '../Accordion';
import { MobileMenu } from './MobileMenu';
import { useWindowSize } from '../../hooks/useWindowSize';
import { largaScreenPx } from '../../helpers/constants';

export const SideBar = ({ menuTags }) => {
  const [ menuStatus, setMenuStatus ] = useState(false);
  const { width } = useWindowSize();

  const responsiveMenuClass = () => {
    if (width < largaScreenPx && menuStatus)
      return 'menu-open';

    return '';
  };

  return (
    <>
      <div
        onClick={() => setMenuStatus(!menuStatus)}
        className={`${menuStatus ? 'mobile-menu-bg' : ''}`}
      >
      </div>
      <MobileMenu
        toggleResponsiveMenu={() => setMenuStatus(!menuStatus)}
      />
      <aside
        className={`${responsiveMenuClass()}`}
      >
        <Accordion
          menuTags={menuTags} />
      </aside >
    </>
  );
};