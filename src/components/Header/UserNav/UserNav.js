import { NavLink } from 'react-router-dom';

import styles from './UserNav.module.css';

export default function UserNav() {

return (
    <div className={styles.container} >
      <NavLink className={styles.link}  to="/user">
     <p className={styles.text}>Name</p>
      </NavLink>
    </div>
  );
}