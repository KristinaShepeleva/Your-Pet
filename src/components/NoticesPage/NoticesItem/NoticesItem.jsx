import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';

import css from './NoticesItem.module.css';
import {
  DeleteIcon,
  HeartFillIcon,
  LocationIcon,
  ClockIcon,
  MaleIcon,
  FamileIcon,
  HeartIcon,
} from '../../../helpers/icons';

import ModalContainer from 'components/Modals/ModalContainer/ModalContainer';
import ModalPetsContainer from 'components/Modals/ModalContainer/ModalPetsContaine';
import PetsModal from 'components/Modals/PetsModal/PetsModal';
import DeleteModal from 'components/Modals/DeleteModal/DeleteModal';
import AtentionModal from 'components/Modals/AtentionModal/AtentionModal';

import { useAuth, useNotices } from 'hooks';
import {
  favoriteList,
  getOneNotices,
  updateFavorite,
} from 'redux/notices/operation';
import { useLocation } from 'react-router-dom';

const NoticesItem = ({ pet, currentPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPetsModalOpen, setIsPetsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { isLoggedIn, userId } = useAuth();
  const { noticeById } = useNotices();

  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '');
  const category = pathSegments[1];

  function getCurrentAge(date) {
    return (
      ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) |
      0
    );
  }

  // delete notice /////////////
  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  // ///////////////////
  // btn favorite /////////////
  const handelFavorite = async pet => {
    const id = pet._id;
    if (!isLoggedIn) {
      return setIsModalOpen(!isModalOpen);
    }
    await dispatch(updateFavorite(id));
    if (category === 'favorite') {
      await dispatch(favoriteList(currentPage));
    }
  };

  const fav = pet.favorite.some(id => id === userId);
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
        {pet.category === 'sell' && (
          <p className={`${css.category} ${css.price}`}>{pet.price}</p>
        )}
        <button
          className={css.favoritBtn}
          type="button"
          onClick={() => {
            handelFavorite(pet);
          }}
        >
          {fav ? (
            <HeartFillIcon className={css.iconFill} />
          ) : (
            <HeartIcon className={css.icon} />
          )}
        </button>
        {pet.owner === userId && (
          <button
            className={css.deleteBtn}
            onClick={toggleDeleteModal}
            type="button"
          >
            <DeleteIcon className={css.deleteIcon} />
          </button>
        )}
        <ul className={css.infoWrapper}>
          <li className={css.info}>
            <LocationIcon />
            <p>{pet.location}</p>
          </li>
          <li className={css.info}>
            <ClockIcon />
            <p>{getCurrentAge(pet.birthday)} years</p>
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
          className={css.buttonLearnMore}
          type="button"
          text="Learn more"
          onClick={() => handelLearnMore(pet)}
        >
          Learn more
        </button>
      </div>
      {isDeleteModalOpen && (
        <ModalContainer toggleModal={toggleDeleteModal}>
          <DeleteModal
            nameModal="Delete adverstiment?"
            title={`${pet.title}`}
            id={pet._id}
            toggleDeleteModal={toggleDeleteModal}
            currentPage={currentPage}
          />
        </ModalContainer>
      )}
      {isPetsModalOpen && (
        <ModalPetsContainer toggleModal={togglePetsModal}>
          <PetsModal
            pet={pet}
            owner={noticeById.owner}
            togglePetsModal={togglePetsModal}
            fav={fav}
            currentPage={currentPage}
          />
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

NoticesItem.propTypes = {
  pet: PropTypes.shape({
    birthday: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    favorite: PropTypes.arrayOf(PropTypes.string),
    imgUrl: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  fav: PropTypes.bool,
  currentPage: PropTypes.number.isRequired,
};
export default NoticesItem;
