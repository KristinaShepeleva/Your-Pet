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
import DeleteModal from 'components/Modals/DeleteModal/DeleteModal';
import ModalPetsContainer from 'components/Modals/ModalContainer/ModalPetsContaine';
import PetsModal from 'components/Modals/PetsModal/PetsModal';
import { useAuth } from 'hooks';

const NoticesItem = ({
  toggleDeleteModal,
  togglePetsModal,
  pet,
  petInfo,
  isPetsModalOpen,
  isDeleteModalOpen,
}) => {
  const { isLoggedIn } = useAuth();

  const handelFavorite = () => {
    console.log('clik to heart');
  };

  return (
    <li className={css.listItem}>
      <div className={css.imgContainer}>
        <img className={css.img} src={pet.imgUrl} alt="Animals" />
        <p className={css.category}>{pet.category}</p>
        <button
          className={css.favoritBtn}
          type="button"
          onClick={handelFavorite}
        >
          <HeartFillIcon
            className={pet.favorite ? css.fillIcon : css.fullIcon}
          />
        </button>
        {isLoggedIn && (
          <button
            className={css.deleteBtn}
            onClick={() => toggleDeleteModal(pet)}
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
          onClick={() => togglePetsModal(pet)}
        >
          Learn more
        </button>
      </div>
      {isDeleteModalOpen && (
        <ModalContainer toggleModal={toggleDeleteModal}>
          <DeleteModal pet={petInfo} toggleDeleteModal={toggleDeleteModal} />
        </ModalContainer>
      )}
      {isPetsModalOpen && (
        <ModalPetsContainer toggleModal={togglePetsModal}>
          <PetsModal pet={petInfo} togglePetsModal={togglePetsModal} />
        </ModalPetsContainer>
      )}
    </li>
  );
};

export default NoticesItem;
