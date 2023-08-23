import { Link, Outlet } from 'react-router-dom';

import css from './NoticesPage.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

import NoticesSearch from '../../components/NoticesSearch/NoticesSearch';
import AddPetButton from '../../components/AddPetButton/AddPetButton';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import Container from 'components/Container/Container';
import NoticesCategories from '../../components/NoticesCategories/NoticesCategories';
import NoticesCategoriesList from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import ModalContainer from 'components/ModalContainer/ModalContainer';

import AtentionModal from 'components/AtentionModal/AtentionModal';
import DeleteModal from 'components/DeleteModal/DeleteModal';
import PetsModal from 'components/PetsModal/PetsModal';

const Notices = () => {
  const [query, setQuery] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFormSubmit = query => {
    setQuery(query);
  };

  console.log(query);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <Container>
        <h2 className={css.title}>Find your favorite pet</h2>
        <NoticesSearch onFormSubmit={onFormSubmit}></NoticesSearch>
        <div className={css.wpapperFilter}>
          <NoticesCategories isUser={isLoggedIn} />
          <div className={css.filterWrap}>
            <NoticesFilters></NoticesFilters>

            <Link to="/add-pet">
              <AddPetButton></AddPetButton>
            </Link>
            <button onClick={toggleModal} type="button">
              test modal
            </button>
          </div>
        </div>
        <div className={css.listCardContainer}>
          <NoticesCategoriesList />
        </div>
        <Outlet />
        {isModalOpen && (
          <ModalContainer toggleModal={toggleModal}>
            <AtentionModal />
          </ModalContainer>
        )}
        {isModalOpen && (
          <ModalContainer toggleModal={toggleModal}>
            <DeleteModal />
          </ModalContainer>
        )}
        {isModalOpen && (
          <ModalContainer toggleModal={toggleModal}>
            <PetsModal />
          </ModalContainer>
        )}
      </Container>
    </>
  );
};

export default Notices;
