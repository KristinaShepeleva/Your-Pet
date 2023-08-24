import LogoutModal from 'components/Modals/LogoutModal/LogoutModal';
import ModalContainer from 'components/Modals/ModalContainer/ModalContainer';
import { LogoutIcon } from 'helpers/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import styles from './LogOut.module.css';

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
      <button className={styles.button} type="button" onClick={toggleLogoutModal}>
      <p>Log out</p> <LogoutIcon className={styles.icon} /> 
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
