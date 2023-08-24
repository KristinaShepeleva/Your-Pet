import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { CrossBigIcon } from '../../helpers/icons';

import css from './ModalPetsContaine.module.css';
const modalContainer = document.getElementById('modal-root');

const ModalPetsContainer = ({ toggleModal, children }) => {
  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [toggleModal]);

  const onBackdroplOpen = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <>
      <div onClick={onBackdroplOpen} className={css.modalBackdrop}>
        <div className={css.modalContent}>
          <button
            className={css.modalCloseBtn}
            type="button"
            onClick={toggleModal}
          >
            <CrossBigIcon className={css.iconClose} />
          </button>
          {children}
        </div>
      </div>
    </>,
    modalContainer
  );
};

ModalPetsContainer.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalPetsContainer;
