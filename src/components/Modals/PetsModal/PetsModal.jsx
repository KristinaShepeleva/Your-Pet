import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { HeartFillIcon, HeartIcon } from 'helpers/icons';
import css from './PetsModal.module.css';
import ModalContainer from '../ModalContainer/ModalContainer';
import ContactsModal from '../ContactsModal/ContactsModal';
import AtentionModal from '../AtentionModal/AtentionModal';
import { useAuth } from 'hooks';
import { favoriteList, updateFavorite } from 'redux/notices/operation';
import { useLocation } from 'react-router-dom';

const PetsModal = ({ pet, owner, fav }) => {
  const [isContactsModal, setIsContactsModal] = useState(false);
  const [isAtentionModal, setIsAtentionModal] = useState(false);

  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '');
  const category = pathSegments[1];

  const toggleContactsModal = () => {
    setIsContactsModal(!isContactsModal);
  };

  const handelFavorite = async pet => {
    const id = pet._id;
    if (!isLoggedIn) {
      return setIsAtentionModal(!isAtentionModal);
    }
    await dispatch(updateFavorite(id));
    if (category === 'favorite') {
      await dispatch(favoriteList());
    }
  };
  const yers = pet.birthday.slice(0, 4);
  const mouth = pet.birthday.slice(5, 7);
  const day = pet.birthday.slice(8, 10);

  return (
    <>
      <div className={css.contentContainer}>
        <div className={css.content}>
          <div className={css.imgContainer}>
            <img className={css.img} src={pet.imgUrl} alt="Animals" />
            <p className={css.category}>{pet.category}</p>
            {pet.category === 'sell' && (
              <p className={`${css.category} ${css.price}`}>{pet.price}</p>
            )}
          </div>
          <div className={css.infoContainer}>
            <h2 className={css.title}>Сute dog looking for a home</h2>
            <div className={css.info}>
              <ul className={css.list}>
                <li className={css.item}>Name:</li>
                <li className={css.item}>Birthday:</li>
                <li className={css.item}>Type:</li>
                <li className={css.item}>Place:</li>
                <li className={css.item}>The sex:</li>
                <li className={css.item}>Email:</li>
                <li className={css.item}>Phone:</li>
              </ul>
              <ul className={css.list1}>
                <li className={css.infoItem}>{pet.name}</li>
                <li className={css.infoItem}>
                  {day}.{mouth}.{yers}
                </li>
                <li className={css.infoItem}>{pet.type}</li>
                <li className={css.infoItem}>{pet.location}</li>
                <li className={css.infoItem}>{pet.sex}</li>
                {owner && (
                  <>
                    <li className={`${css.contacts} ${css.infoItem}`}>
                      <a href={`mailto:${owner.email}`}>{owner.email}</a>
                    </li>
                    <li className={`${css.contacts} ${css.infoItem}`}>
                      <a href={`tel:${owner.phone}`}>{owner.phone}</a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        {pet.comments && (
          <p className={css.comments}>
            <span className={css.span}>Comments: </span>
            {pet.comments}
          </p>
        )}
        <div className={css.btnContainer}>
          <button className={css.btnContact} onClick={toggleContactsModal}>
            Contact
          </button>
          <button
            type="button"
            className={fav ? `${css.btnAddTo} ${css.btnRemove}` : css.btnAddTo}
            onClick={() => handelFavorite(pet)}
          >
            {fav ? (
              <>
                <span>Remove to</span>
                <HeartFillIcon className={css.iconFill} />
              </>
            ) : (
              <>
                <span>Add to </span>
                <HeartIcon className={css.icon} />
              </>
            )}
          </button>
        </div>
        {isContactsModal && (
          <ModalContainer toggleModal={toggleContactsModal}>
            <ContactsModal contacts={owner} />
          </ModalContainer>
        )}
        {isAtentionModal && (
          <ModalContainer
            toggleModal={() => setIsAtentionModal(!isAtentionModal)}
          >
            <AtentionModal />
          </ModalContainer>
        )}
      </div>
    </>
  );
};

PetsModal.propTypes = {
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
  owner: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  fav: PropTypes.bool.isRequired,
};

export default PetsModal;
