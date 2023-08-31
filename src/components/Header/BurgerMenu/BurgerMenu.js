import { createPortal } from 'react-dom';
import Logo from '../Logo/Logo';
import {CrossBigIcon} from '../../../helpers/icons';
import {LogoutUserNav} from "../UserNav/LogoutUserNav"

import { useAuth } from '../../../hooks/useAuth';

import styles from './BurgerMenu.module.css';

export default function MobileMenu({ children, onClick, isMobile, isTablet }) {
  const { isLoggedIn } = useAuth();
  return createPortal(
 
      <div className={styles.mobileMenu}>
        <div className={styles.head} >
          
          <Logo isMobile={isMobile} />
          {isTablet && isLoggedIn && <LogoutUserNav/>}
          <CrossBigIcon className={styles.closeButton} onClick={onClick} />

        </div>
        {children}
      </div>,
 
    document.querySelector('#modal-root')
  );
}