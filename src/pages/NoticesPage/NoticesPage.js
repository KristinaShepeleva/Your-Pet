import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import css from './NoticesPage.module.css';
import { allNoties, favoriteList, myNotices } from 'redux/notices/operation';
import { useAuth } from 'hooks';

import Container from 'components/Container/Container';
import NoticesSearch from 'components/NoticesPage/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesPage/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesPage/NoticesFilters/NoticesFilters';
import AddPetButton from 'components/NoticesPage/AddPetButton/AddPetButton';
import NoticesCategoriesList from 'components/NoticesPage/NoticesCategoriesList/NoticesCategoriesList';
import { getCurrent } from 'redux/auth/authOperations';
// import { currentUser, getCurrent, updateUser } from 'redux/auth/authOperations';

const Notices = () => {
  const [search, setSearch] = useState('');

  // const newNotices = {
  //   name: 'Kit',
  //   title: 'Lovely cat',
  //   sex: 'male',
  //   birthday: 13.09.2021,
  //   type: 'red cat',
  //   // imgURL:
  //   //   'https://pixabay.com/photos/dalmatian-dog-lick-tongue-pet-1020790/',
  //   location: 'Kyiv',
  //   price: '10$',
  //   comments: 'Found cat',
  //   category: 'lost found',// sell // in good hands
  // };
  const dispatch = useDispatch();
  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '');
  const category = pathSegments[1];

  useEffect(() => {
    if (category === 'favorite') {
      dispatch(favoriteList());
    } else if (category === 'own') {
      dispatch(myNotices());
    } else {
      const request = {
        category,
        search,
      };
      dispatch(allNoties(request));
      dispatch(getCurrent());
    }
  }, [dispatch, category, search]);

  const { isLoggedIn } = useAuth();

  return (
    <>
      <Container>
        <NoticesSearch setSearch={setSearch} />
        <div className={css.wpapperFilter}>
          <NoticesCategoriesNav />
          <div className={css.filterWrap}>
            <NoticesFilters />
            <Link to={isLoggedIn && '/add-pet'}>
              <AddPetButton />
            </Link>
          </div>
        </div>
        <NoticesCategoriesList />
        <Outlet />
      </Container>
    </>
  );
};

export default Notices;
