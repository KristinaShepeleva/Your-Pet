import { LogoutIcon } from 'helpers/icons';
import css from './LogoutUser.module.css';
import ModalContainer from 'components/Modals/ModalContainer/ModalContainer';
import LogoutModal from 'components/Modals/LogoutModal/LogoutModal';
import { logout } from 'redux/auth/authOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const LogoutUser = () => {
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
      <button className={css.bt} type="button" onClick={toggleLogoutModal}>
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
