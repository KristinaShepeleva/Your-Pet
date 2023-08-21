import { Link, Outlet } from 'react-router-dom';

import css from './NoticesPage.module.css';
import { useState} from 'react';
import NoticesSearch from '../../components/NoticesSearch/NoticesSearch';
import AddPetButton from '../../components/AddPetButton/AddPetButton';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import Container from 'components/Container/Container';

const Notices = () => {
  const [query, setQuery] = useState('');

  
const onFormSubmit = query => {
    setQuery(query);
  };

  console.log(query);

  return (
    <>
      <Container>
      <h2 className={css.title}>Find your favorite pet</h2>
      <NoticesSearch onFormSubmit={onFormSubmit}></NoticesSearch>
      <div className={css.wpapperFilter}>
      <ul className={css.wpapperCategoryList}>
        <li>
          <Link to="sell">sell</Link>
        </li>
        <li>
          <Link to="lost-found">lost/found</Link>
        </li>
        <li>
          <Link to="in-good-hands">in good hands</Link>
        </li>
        <li>
          <Link to="favorite">favorite</Link>
        </li>
        <li>
          <Link to="own">my ads</Link>
        </li>
      </ul>
        <div className={css.filterWrap}>
          <NoticesFilters></NoticesFilters>
         
          <Link to="/add-pet"><AddPetButton ></AddPetButton></Link>
      
        </div>
        </div>
        <Outlet />
        </Container>
    </>
  );
};

export default Notices;
