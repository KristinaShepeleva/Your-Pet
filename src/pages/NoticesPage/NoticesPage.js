import { Outlet } from 'react-router-dom';

import css from './NoticesPage.module.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
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
import PetsModal from 'components/PetsModal/PetsModal';
import DeleteModal from 'components/DeleteModal/DeleteModal';


const Notices = () => {
  const [query, setQuery] = useState('');
  
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPetsModalOpen, setIsPetsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    
    
  
  
  const onFormSubmit = query => {
    setQuery(query);
  };

  console.log(query);

  const toggleModal = () => {
    if (!isLoggedIn) {
       setIsModalOpen(prevState => !prevState);
    } else {
      navigate("/add-pet");
    }
  };

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(prevState => !prevState);
    };
    
    const togglePetsModal = () => {
    setIsPetsModalOpen(prevState => !prevState);
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

            <AddPetButton handeModal={toggleModal} />
           
          </div>
        </div>
        <div className={css.listCardContainer}>
          <NoticesCategoriesList handlePetsModal={togglePetsModal} handleDeleteModal={toggleDeleteModal} />
        </div>
        <Outlet />
        {isModalOpen && (
          <ModalContainer toggleModal={toggleModal}>
            <AtentionModal />
          </ModalContainer>
        )}
        {isPetsModalOpen && (
          <ModalContainer toggleModal={togglePetsModal}>
            <PetsModal />
          </ModalContainer>
                    )}
                    {isDeleteModalOpen && (
          <ModalContainer toggleModal={toggleDeleteModal}>
            <DeleteModal />
          </ModalContainer>
        )}
      </Container>
    </>
  );
};

export default Notices;
