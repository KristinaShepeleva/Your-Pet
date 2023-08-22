import { createPortal } from 'react-dom';
import Logo from '../Logo/Logo';
import {CrossBigIcon} from '../../../helpers/icons';

import styles from './BurgerMenu.module.css';

export default function MobileMenu({ children, onClick, isMobile }) {
  return createPortal(
 
      <div className={styles.mobileMenu}>
        <div className={styles.head} >
          <Logo isMobile={isMobile} />
          <CrossBigIcon className={styles.closeButton} onClick={onClick} />
        </div>
        {children}
      </div>,
 
    document.querySelector('#modal-root')
  );
}