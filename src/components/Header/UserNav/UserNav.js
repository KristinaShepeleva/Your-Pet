import { NavLink } from 'react-router-dom';
import {useAuth} from "../../../hooks/useAuth";
import styles from './UserNav.module.css';
import {UserIcon} from "../../../helpers/icons"

export default function UserNav({ isMobile, style, onClick }) {
  const {user} = useAuth();
return (
    <div className={styles.container} style={style}>
      <NavLink className={styles.link}   onClick={onClick} to="/user">
        <UserIcon style={!isMobile? { marginRight: 12 }: { marginRight: 8 } }/>
        {!isMobile && <p className={styles.text}>{user.name}</p>}
      </NavLink>
    </div>
  );
}