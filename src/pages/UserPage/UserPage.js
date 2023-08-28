import Container from 'components/Container/Container';
import CongratsModal from 'components/Modals/CongratsModal/CongratsModal';
import ModalContainer from 'components/Modals/ModalContainer/ModalContainer';
import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
// import { UserForm } from 'components/UserForm/Form/UserForm';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectNewUser } from 'redux/auth/authSelectors';
import css from './UserPage.module.css';

const User = () => {
  const isNewUser = useSelector(selectNewUser);

  const [isShowModal, setIsShowModal] = useState(true);
  const [newUser, setNewUser] = useState(isNewUser);
  console.log(isNewUser, 'new');

  const toggleModal = () => {
    setNewUser(!newUser);
    setIsShowModal(!isShowModal);
  };

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
