import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import styles from './UserNav.module.css';
import { UserIcon } from '../../../helpers/icons';
import { LogoutUserNav } from 'components/Header/UserNav/LogoutUserNav';

export default function UserNav({ isMobile, isTablet, style, onClick }) {
  const { user } = useAuth();
  return (
    <div className={styles.container} style={style}>
      {(!isMobile && !isTablet) && (<LogoutUserNav />)}
      <NavLink className={styles.link} onClick={onClick} to="/user">
        <UserIcon
          style={!isMobile ? { marginRight: 12 } : { marginRight: 8 }}
        />
        {!isMobile && <p className={styles.text}>{user.name}</p>}
      </NavLink>
    </div>
  );
}
