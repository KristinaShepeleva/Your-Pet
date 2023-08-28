import { HeartFillIcon, HeartIcon } from 'helpers/icons';
import css from './PetsModal.module.css';
import { useState } from 'react';
import ModalContainer from '../ModalContainer/ModalContainer';
import ContactsModal from '../ContactsModal/ContactsModal';
import AtentionModal from '../AtentionModal/AtentionModal';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { updateFavorite } from 'redux/notices/operation';

const PetsModal = ({ pet, fav }) => {
  const [isContactsModal, setIsContactsModal] = useState(false);
  const [isAtentionModal, setIsAtentionModal] = useState(false);

  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const toggleContactsModal = () => {
    setIsContactsModal(!isContactsModal);
  };

  const handelFavorite = pet => {
    const id = pet._id;
    if (!isLoggedIn) {
      return setIsAtentionModal(!isAtentionModal);
    }
    dispatch(updateFavorite(id));
  };

  return (
    <>
      <div className={css.contentContainer}>
        <div className={css.content}>
          <div className={css.imgContainer}>
            <img className={css.img} src={pet.imgUrl} alt="Animals" />
            <p className={css.category}>{pet.category}</p>
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
                <li className={css.infoItem}>{pet.birthday}</li>
                <li className={css.infoItem}>{pet.type}</li>
                <li className={css.infoItem}>{pet.location}</li>
                <li className={css.infoItem}>{pet.sex}</li>
                {pet.owner && (
                  <>
                    <li className={`${css.contacts} ${css.infoItem}`}>
                      <a href={`mailto:${pet.owner.email}`}>
                        {pet.owner.email}
                      </a>
                    </li>
                    <li className={`${css.contacts} ${css.infoItem}`}>
                      <a href={`tel:${pet.owner.phone}`}>{pet.owner.phone}</a>
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
            <ContactsModal pet={pet} />
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

export default PetsModal;
