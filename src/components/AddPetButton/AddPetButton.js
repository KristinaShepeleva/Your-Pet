import { useState } from 'react';

import css from './AddPetButton.module.css';
import { PlusSmallIcon, PlusBigIcon } from '../../helpers/icons';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import AtentionModal from 'components/AtentionModal/AtentionModal';
import { useAuth } from 'hooks';

const AddPetButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className={css.addBtn} type="button">
        <PlusSmallIcon className={css.addIcon} />
        <PlusBigIcon className={css.addIconBig} />
        <p className={css.textBtn}>Add Pet</p>
      </button>
      {isModalOpen && !isLoggedIn && (
        <ModalContainer toggleModal={toggleModal}>
          <AtentionModal />
        </ModalContainer>
      )}
    </>
  );
};

export default AddPetButton;
