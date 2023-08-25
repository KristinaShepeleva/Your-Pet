import { Link, Outlet } from 'react-router-dom';

import css from './NoticesPage.module.css';

import Container from 'components/Container/Container';
import { useAuth } from 'hooks';
import NoticesSearch from 'components/NoticesPage/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesPage/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesPage/NoticesFilters/NoticesFilters';
import AddPetButton from 'components/NoticesPage/AddPetButton/AddPetButton';
import NoticesCategoriesList from 'components/NoticesPage/NoticesCategoriesList/NoticesCategoriesList';

const Notices = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Container>
        {/* ///////////////////////////// NoticesSearch*/}
        <NoticesSearch />
        <div className={css.wpapperFilter}>
          {/* //////////////////////////////////// NoticesCategoriesNav*/}
          <NoticesCategoriesNav />
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
