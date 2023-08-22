import { createPortal } from 'react-dom';
import Logo from '../Logo/Logo';
import {CrossSmallIcon} from '../../../helpers/icons';

import styles from './BurgerMenu.module.css';

export default function MobileMenu({ children, onClick, isMobile }) {
  return createPortal(
 
      <div className={styles.mobileMenu}>
        <div className={styles.head} onClick={onClick}>
          <Logo isMobile={isMobile} />
          <CrossSmallIcon className={styles.closeButton} />
        </div>
        {children}
      </div>,
 
    document.querySelector('#modal-root')
  );
}