import PropTypes from 'prop-types';

import { PawprintIcon } from 'helpers/icons';
import css from './CongratsModal.module.css';

const CongratsModal = ({ toggleModal }) => {
  return (
    <div className={css.containet}>
      <h2 className={css.title}>Congrats</h2>
      <p className={css.text}>Youre registration is success</p>
      <button type="button" onClick={toggleModal} className={css.btn}>
        Go to profile
        <PawprintIcon className={css.icon} />
      </button>
    </div>
  );
};

CongratsModal.propTypes = {
  toggleModal: PropTypes.func,
};

export default CongratsModal;
