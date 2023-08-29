import PropTypes from 'prop-types';

import { LogoutIcon } from 'helpers/icons';
import css from './LogoutModal.module.css';

const LogoutModal = ({ toggleLogoutModal, logout }) => {
  return (
    <div className={css.containet}>
      <h2 className={css.title}>Already leaving?</h2>
      <div className={css.btnContainer}>
        <button type="button" onClick={toggleLogoutModal} className={css.btn}>
          Cancel
        </button>
        <button type="button" className={css.btnYes} onClick={logout}>
          Yes
          <LogoutIcon className={css.icon} />
        </button>
      </div>
    </div>
  );
};
LogoutModal.propTypes = {
  toggleLogoutModal: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default LogoutModal;
