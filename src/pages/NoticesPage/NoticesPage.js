import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import css from './NoticesPage.module.css';
import { allNoties, favoriteList, myNotices } from 'redux/notices/operation';
import { useAuth, useNotices } from 'hooks';

import Container from 'components/Container/Container';
import NoticesSearch from 'components/NoticesPage/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesPage/NoticesCategoriesNav/NoticesCategoriesNav';
// import NoticesFilters from 'components/NoticesPage/NoticesFilters/NoticesFilters';
import AddPetButton from 'components/NoticesPage/AddPetButton/AddPetButton';
import NoticesCategoriesList from 'components/NoticesPage/NoticesCategoriesList/NoticesCategoriesList';
import { Paginagion } from 'components/Paginagion/Pagination';

const Notices = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoggedIn } = useAuth();
  const { totalPages } = useNotices();

  const dispatch = useDispatch();
  const location = useLocation();

  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '');
  const category = pathSegments[1];

  useEffect(() => {
    if (category === 'favorite') {
      dispatch(favoriteList(currentPage));
    } else if (category === 'own') {
      dispatch(myNotices(currentPage));
    } else {
      const request = {
        category,
        search,
        page: currentPage,
      };
      dispatch(allNoties(request));
    }
  }, [dispatch, category, search, currentPage]);

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage.selected + 1);
  };

  return (
    <>
      <Container>
        <NoticesSearch setSearch={setSearch} />
        <div className={css.wpapperFilter}>
          <NoticesCategoriesNav setCurrentPage={setCurrentPage} />
          <div className={css.filterWrap}>
            {/* <NoticesFilters /> */}
            <Link to={isLoggedIn && '/add-pet'}>
              <AddPetButton />
            </Link>
          </div>
        </div>
        <NoticesCategoriesList currentPage={currentPage} />
        {totalPages > 1 && (
          <Paginagion
            handlePageChange={handlePageChange}
            total={totalPages}
            currentPage={currentPage}
          />
        )}
        <Outlet />
      </Container>
    </>
  );
};

export default Notices;
