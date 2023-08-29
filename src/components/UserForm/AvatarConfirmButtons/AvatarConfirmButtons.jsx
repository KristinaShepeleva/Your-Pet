import PropTypes from 'prop-types';
import { CheckIcon, CrossBigIcon } from 'helpers/icons';
import css from './AvatarConfirmButtons.module.css';

export const AvatarConfirmButtons = ({ acceptAvatar, rejectAvatar }) => {
  return (
    <div className={css.confirmBtBox}>
      <button className={css.confirmBt} type="button" onClick={acceptAvatar}>
        {' '}
        <CheckIcon style={{ stroke: '#54ADFF' }} />
      </button>
      <span className={css.textConfirm}>Confirm</span>
      <button className={css.confirmBt} type="button" onClick={rejectAvatar}>
        {' '}
        <CrossBigIcon style={{ stroke: '#F43F5E' }} />
      </button>
    </div>
  );
};

AvatarConfirmButtons.propTypes = {

  acceptAvatar: PropTypes.func.isRequired,
  rejectAvatar: PropTypes.func.isRequired,
};