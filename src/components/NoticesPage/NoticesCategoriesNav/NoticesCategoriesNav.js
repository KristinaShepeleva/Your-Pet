import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import css from './NoticesCategoriesNav.module.css';
import { favoriteList, myNotices } from 'redux/notices/operation';
import { useAuth } from 'hooks';

const NoticesCategoriesNav = ({ setCategory }) => {
  const dispatch = useDispatch();

  const handelFavorite = () => {
    dispatch(favoriteList());
  };

  const handelOwn = () => {
    dispatch(myNotices());
  };
  const { isLoggedIn } = useAuth();

  return (
    <ul className={css.wpapperCategoryList}>
      <li>
        <NavLink
          to="sell"
          className={({ isActive }) =>
            isActive ? `${css.categoryBtn} ${css.active}` : css.categoryBtn
          }
          onClick={() => setCategory('sell')}
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
          onClick={() => setCategory('lost found')}
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
          onClick={() => setCategory('in good hands')}
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
              onClick={handelFavorite}
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
              onClick={handelOwn}
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
