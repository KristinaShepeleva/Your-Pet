import { NavLink } from 'react-router-dom';

import css from './MainNav.module.css';

export default function Nav({ onClick }) {
  return (
    <nav>
      <div className={css.menu}>
        <ul className={css.list}>
          <li className={css.item} onClick={onClick}>
            <NavLink className={css.link} to="/news">
              News
            </NavLink>
          </li>
          <li className={css.item} onClick={onClick}>
            <NavLink className={css.link} to="/notices">
              Find pet
            </NavLink>
          </li>
          <li className={css.item} onClick={onClick}>
            <NavLink className={css.link} to="/friends">
              Our friends
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}