import { useState, useEffect } from 'react';
import MainNav from '../MainNav/MainNav';
// import UserNav from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { MenuIcon } from '../../../helpers/icons';
import styles from './Navigation.module.css';

export default function Navigation({ isDesktop, isTablet, isMobile }) {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    if (isDesktop) {
      setShowBurgerMenu(false);
    }
  }, [isDesktop]);

  const toggleMobileMenu = e => {
    e.preventDefault();
    setShowBurgerMenu(showBurgerMenu => !showBurgerMenu);
  };

  return (
    <div className={styles.navigation}>
      {isDesktop && (
        <>
          <MainNav />
          <AuthNav />
        </>
      )}
      {(isTablet || isMobile) && (
        <>
          {isTablet && <AuthNav />}
          <MenuIcon className={styles.burger} onClick={toggleMobileMenu} />
        </>
      )}
        {showBurgerMenu && (
        <BurgerMenu onClick={toggleMobileMenu} isMobile={isMobile}>
          
          {isMobile && <AuthNav onClick={toggleMobileMenu}/>}
          <MainNav onClick={toggleMobileMenu}/>
        </BurgerMenu>
      )}
      
    </div>
  );
}
