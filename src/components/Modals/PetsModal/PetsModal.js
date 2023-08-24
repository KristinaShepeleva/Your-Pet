import { HeartFillIcon, HeartIcon } from 'helpers/icons';
import css from './PetsModal.module.css';
import { useState } from 'react';
import ModalContainer from '../ModalContainer/ModalContainer';
import ContactsModal from '../ContactsModal/ContactsModal';

const PetsModal = ({ pet }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
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
              <li className={css.infoItem}>{pet.age}</li>
              <li className={css.infoItem}>{pet.type}</li>
              <li className={css.infoItem}>{pet.location}</li>
              <li className={css.infoItem}>{pet.sex}</li>
              <li className={`${css.contacts} ${css.infoItem}`}>
                <a href={`mailto:${pet.contacts.email}`}>
                  {pet.contacts.email}
                </a>
              </li>
              <li className={`${css.contacts} ${css.infoItem}`}>
                <a href={`tel:${pet.contacts.phone}`}>{pet.contacts.phone}</a>
              </li>
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
        <button className={css.btnContact} onClick={toggleModal}>
          Contact
        </button>
        <button type="button" className={css.btnAddTo}>
          Add to
          {pet.favorite ? (
            <HeartFillIcon className={css.iconFill} />
          ) : (
            <HeartIcon className={css.icon} />
          )}
        </button>
      </div>
      {isOpenModal && (
        <ModalContainer toggleModal={toggleModal}>
          <ContactsModal pet={pet} />
        </ModalContainer>
      )}
    </div>
  );
};

export default PetsModal;
