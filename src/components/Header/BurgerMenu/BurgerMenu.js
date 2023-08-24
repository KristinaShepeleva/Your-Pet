import { createPortal } from 'react-dom';
import Logo from '../Logo/Logo';
import {CrossBigIcon} from '../../../helpers/icons';
import {LogoutUserNav} from "../UserNav/LogoutUserNav"

import styles from './BurgerMenu.module.css';

export default function MobileMenu({ children, onClick, isMobile, isTablet }) {
  return createPortal(
 
      <div className={styles.mobileMenu}>
        <div className={styles.head} >
          
          <Logo isMobile={isMobile} />
          {isTablet && <LogoutUserNav/>}
          <CrossBigIcon className={styles.closeButton} onClick={onClick} />

        </div>
        {children}
      </div>,
 
    document.querySelector('#modal-root')
  );
}