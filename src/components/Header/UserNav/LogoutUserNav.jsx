import LogoutModal from 'components/Modals/LogoutModal/LogoutModal';
import ModalContainer from 'components/Modals/ModalContainer/ModalContainer';
import { LogoutIcon } from 'helpers/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';

export const LogoutUserNav = () => {
  const dispatch = useDispatch();

  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const toggleLogoutModal = () => {
    setIsLogoutModal(!isLogoutModal);
  };

  const logoutBtn = () => {
    dispatch(logout());
  };

  return (
    <>
      <button type="button" onClick={toggleLogoutModal}>
        <LogoutIcon /> Logout
      </button>
      {isLogoutModal && (
        <ModalContainer toggleModal={toggleLogoutModal}>
          <LogoutModal
            toggleLogoutModal={toggleLogoutModal}
            logout={logoutBtn}
          />
        </ModalContainer>
      )}
    </>
  );
};
