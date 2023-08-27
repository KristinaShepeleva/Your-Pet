import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import css from './NoticesPage.module.css';
import { allNoties } from 'redux/notices/operation';
import { useAuth } from 'hooks';

import Container from 'components/Container/Container';
import NoticesSearch from 'components/NoticesPage/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesPage/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesPage/NoticesFilters/NoticesFilters';
import AddPetButton from 'components/NoticesPage/AddPetButton/AddPetButton';
import NoticesCategoriesList from 'components/NoticesPage/NoticesCategoriesList/NoticesCategoriesList';

const Notices = () => {
  const [category, setCategory] = useState('sell');
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const request = {
      category,
      search,
    };
    dispatch(allNoties(request));
  }, [dispatch, category, search]);
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Container>
        {/* ///////////////////////////// NoticesSearch*/}
        <NoticesSearch setSearch={setSearch} />
        <div className={css.wpapperFilter}>
          {/* //////////////////////////////////// NoticesCategoriesNav*/}
          <NoticesCategoriesNav setCategory={setCategory} />
          <div className={css.filterWrap}>
            {/* ///////////////////////////////////// NoticesFilters */}
            <NoticesFilters />
            <Link to={isLoggedIn && '/add-pet'}>
              {/* /////////////////////////////// AddPetPage*/}
              <AddPetButton />
            </Link>
          </div>
        </div>
        {/* ///////////////////////////////// NoticesCategoriesList*/}
        <NoticesCategoriesList />

        <Outlet />
      </Container>
    </>
  );
};

export default Notices;
