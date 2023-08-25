import { NavLink } from 'react-router-dom';
import css from './NoticesCategoriesNav.module.css';
// import { useAuth } from 'hooks';

const NoticesCategoriesNav = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = true;
  return (
    <ul className={css.wpapperCategoryList}>
      <li>
        <NavLink
          to="sell"
          className={({ isActive }) =>
            isActive ? `${css.categoryBtn} ${css.active}` : css.categoryBtn
          }
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
            >
              my ads
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

// NoticesCategoriesNav.propTypes = {
//   isUser: PropTypes.bool.isRequired,
// };

export default NoticesCategoriesNav;
