import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './NoticesCategoriesNav.module.css';
import { useAuth } from 'hooks';

const NoticesCategoriesNav = ({ setCurrentPage }) => {
  const { isLoggedIn } = useAuth();

  return (
    <ul className={css.wpapperCategoryList}>
      <li>
        <NavLink
          to="sell"
          className={({ isActive }) =>
            isActive ? `${css.categoryBtn} ${css.active}` : css.categoryBtn
          }
          onClick={() => setCurrentPage(1)}
        >
          sell
        </NavLink>
      </li>
      <li>
        <NavLink
          to="lost-found"
          className={({ isActive }) =>
            isActive ? `${css.categoryBtn} ${css.active}` : css.categoryBtn
          }
          onClick={() => setCurrentPage(1)}
        >
          lost/found
        </NavLink>
      </li>
      <li>
        <NavLink
          to="in-good-hands"
          className={({ isActive }) =>
            isActive ? `${css.categoryBtn} ${css.active}` : css.categoryBtn
          }
          onClick={() => setCurrentPage(1)}
        >
          in good hands
        </NavLink>
      </li>

      {isLoggedIn && (
        <>
          <li>
            <NavLink
              to="favorite"
              className={({ isActive }) =>
                isActive ? `${css.categoryBtn} ${css.active}` : css.categoryBtn
              }
              onClick={() => setCurrentPage(1)}
            >
              favorite
            </NavLink>
          </li>
          <li>
            <NavLink
              to="own"
              className={({ isActive }) =>
                isActive ? `${css.categoryBtn} ${css.active}` : css.categoryBtn
              }
              onClick={() => setCurrentPage(1)}
            >
              my ads
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

NoticesCategoriesNav.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default NoticesCategoriesNav;
