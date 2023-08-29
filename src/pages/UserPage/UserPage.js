import Container from 'components/Container/Container';
import CongratsModal from 'components/Modals/CongratsModal/CongratsModal';
import ModalContainer from 'components/Modals/ModalContainer/ModalContainer';
import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewUser } from 'redux/auth/authSelectors';
import css from './UserPage.module.css';
import { getCurrentUser } from 'redux/auth/authOperations';
import { fetchPets } from 'redux/pets/petsOperations';

const User = () => {
  const isNewUser = useSelector(selectNewUser);
  const dispatch = useDispatch();
  const [isShowModal, setIsShowModal] = useState(true);
  const [newUser, setNewUser] = useState(isNewUser);

  const toggleModal = () => {
    setNewUser(!newUser);
    setIsShowModal(!isShowModal);
  };
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);
  return (
    <>
      <Container>
        <div className={css.box}>
          <UserData />
          <PetsData />
        </div>
      </Container>
      {newUser && (
        <ModalContainer toggleModal={toggleModal}>
          <CongratsModal toggleModal={toggleModal} />
        </ModalContainer>
      )}
    </>
  );
};

export default User;
