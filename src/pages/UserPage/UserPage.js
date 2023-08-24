import Container from 'components/Container/Container';
import CongratsModal from 'components/Modals/CongratsModal/CongratsModal';
import ModalContainer from 'components/Modals/ModalContainer/ModalContainer';
import { UserForm } from 'components/UserForm/Form/UserForm';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectNewUser } from 'redux/auth/authSelectors';

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
        <h2>UserPage</h2>
        <UserForm />
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
