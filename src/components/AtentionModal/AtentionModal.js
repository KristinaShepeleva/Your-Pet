import css from './AtentionModal.module.css';
import { Link } from 'react-router-dom';
import { PawprintIcon } from 'helpers/icons';

const AtentionModal = () => {
  return (
    <div className={css.atention}>
      <h2 className={css.titleAtention}>Attention!</h2>
      <p className={css.textAtention}>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className={css.btnContainer}>
        <Link to="/login">
          <button type="button" className={css.btnLogIn}>
            Log IN
            <PawprintIcon className={css.linkIcon} />
          </button>
        </Link>
        <Link to="/register">
          <button className={css.btnRegister}>Registration</button>
        </Link>
      </div>
    </div>
  );
};

export default AtentionModal;
