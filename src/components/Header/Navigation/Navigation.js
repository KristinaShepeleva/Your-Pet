import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { UserIcon } from '../../../helpers/icons';
import MainNav from '../MainNav/MainNav';
import UserNav from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { MenuIcon } from '../../../helpers/icons';
import { LogoutUserNav } from '../UserNav/LogoutUserNav';
import styles from './Navigation.module.css';

export default function Navigation({ isDesktop, isTablet, isMobile }) {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  const toggleMobileMenu = e => {
    e.preventDefault();
    setShowBurgerMenu(showBurgerMenu => !showBurgerMenu);
  };

  return (
    <div className={styles.navigation}>
      {isDesktop && (
        <>
          <MainNav />
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </>
      )}
      {isTablet && (
        <>
          {isLoggedIn ? <UserNav isTablet={isTablet} /> : <AuthNav />}
          <MenuIcon className={styles.burger} onClick={toggleMobileMenu} />
        </>
      )}
      {isMobile && (
        <>
          {isLoggedIn && <UserNav isMobile={isMobile} />}
          <MenuIcon className={styles.burger} onClick={toggleMobileMenu} />
        </>
      )}
      {showBurgerMenu && (
        <BurgerMenu
          onClick={toggleMobileMenu}
          isMobile={isMobile}
          isTablet={isTablet}
        >
          {isMobile &&
            (!isLoggedIn ? (
              <AuthNav onClick={toggleMobileMenu} />
            ) : (
              <div className={styles.userData}>
                <UserIcon />
                <p>{user.name}</p>
              </div>
            ))}
          <MainNav onClick={toggleMobileMenu} />
          {isMobile && <LogoutUserNav/>}
        </BurgerMenu>
      )}
    </div>
  );
}
