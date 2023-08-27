import { useDispatch } from 'react-redux';
import { useState } from 'react';

import css from './NoticesItem.module.css';
import {
  DeleteIcon,
  HeartFillIcon,
  LocationIcon,
  ClockIcon,
  MaleIcon,
  FamileIcon,
} from '../../../helpers/icons';

import ModalContainer from 'components/Modals/ModalContainer/ModalContainer';
import ModalPetsContainer from 'components/Modals/ModalContainer/ModalPetsContaine';
import PetsModal from 'components/Modals/PetsModal/PetsModal';
import DeleteModal from 'components/Modals/DeleteModal/DeleteModal';
import AtentionModal from 'components/Modals/AtentionModal/AtentionModal';

import { useAuth, useNotices } from 'hooks';
import { getOneNotices, updateFavorite } from 'redux/notices/operation';

const NoticesItem = ({ pet }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPetsModalOpen, setIsPetsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const { noticeById } = useNotices();

  // delete notice /////////////
  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  // ///////////////////
  // btn favorite /////////////
  const handelFavorite = pet => {
    const id = pet._id;
    if (!isLoggedIn) {
      return setIsModalOpen(!isModalOpen);
    }
    dispatch(updateFavorite(id));
  };
  //////////////////////

  // button learnMore ///////////
  const togglePetsModal = () => {
    setIsPetsModalOpen(!isPetsModalOpen);
  };

  const handelLearnMore = pet => {
    const id = pet._id;
    togglePetsModal();
    dispatch(getOneNotices(id));
  };
  // //////////////////////

  return (
    <li className={css.listItem}>
      <div className={css.imgContainer}>
        <img className={css.img} src={pet.imgUrl} alt="Animals" />
        <p className={css.category}>{pet.category}</p>
        <button
          className={css.favoritBtn}
          type="button"
          onClick={() => handelFavorite(pet)}
        >
          <HeartFillIcon
            className={pet.favorite ? css.fillIcon : css.fullIcon}
          />
        </button>
        {isLoggedIn && (
          <button
            className={css.deleteBtn}
            onClick={toggleDeleteModal}
            type="button"
          >
            <DeleteIcon style={{ stroke: 'var(--blue-color)' }} />
          </button>
        )}
        <ul className={css.infoWrapper}>
          <li className={css.info}>
            <LocationIcon />
            <p>{pet.location}</p>
          </li>
          <li className={css.info}>
            <ClockIcon />
            <p>{pet.age}</p>
          </li>
          <li className={css.info}>
            {pet.sex === 'male' ? <MaleIcon /> : <FamileIcon />}

            <p>{pet.sex}</p>
          </li>
        </ul>
      </div>
      <div className={css.buttonCard}>
        <h3 className={css.titleCard}>{pet.title}</h3>
        <button
          className={css.button}
          type="button"
          text="Learn more"
          onClick={() => handelLearnMore(pet)}
        >
          Learn more
        </button>
      </div>
      {isDeleteModalOpen && (
        <ModalContainer toggleModal={toggleDeleteModal}>
          <DeleteModal pet={pet} toggleDeleteModal={toggleDeleteModal} />
        </ModalContainer>
      )}
      {isPetsModalOpen && (
        <ModalPetsContainer toggleModal={togglePetsModal}>
          <PetsModal pet={noticeById} togglePetsModal={togglePetsModal} />
        </ModalPetsContainer>
      )}
      {isModalOpen && (
        <ModalContainer toggleModal={() => setIsModalOpen(!isModalOpen)}>
          <AtentionModal />
        </ModalContainer>
      )}
    </li>
  );
};

export default NoticesItem;
