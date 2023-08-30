import { DeleteIcon } from 'helpers/icons';
import { useState } from 'react';
import css from './PetsItem.module.css';

import ModalContainer from 'components/Modals/ModalContainer/ModalContainer';
import DeleteModal from 'components/Modals/DeleteModal/DeleteModal';
import PropTypes from 'prop-types';

export const PetsItem = ({
  id,
  petName,
  birthday,
  breed,
  comments,
  image,
}) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
 const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };
  return (
    <>
      <li className={css.wrapper}>
        <div className={css.thumb}>
          <img className={css.image} src={image} alt="pet" />
        </div>

        <ul className={css.box}>
          <li className={css.boxNameDeleteIcon}>
            <p className={css.text}>
              <span className={css.title}>Name:</span> {petName}
            </p>
          </li>
          <li>
            <p className={css.text}>
              <span className={css.title}>Date of birth:</span> {birthday}
            </p>
          </li>
          <li>
            <p className={css.text}>
              <span className={css.title}>Type:</span> {breed}
            </p>
          </li>
          <li>
            <p className={css.text}>
              <span className={css.title}>Comments:</span> {comments}
            </p>
          </li>
        </ul>
        <button className={css.bt} type="button">
          <DeleteIcon className={css.icon} onClick={toggleDeleteModal}/>
        </button>
      </li>

          {isDeleteModalOpen && (
        <ModalContainer toggleModal={toggleDeleteModal}>
          <DeleteModal
            nameModal='Delete it?'
            title={`this pet (${petName})`}
            id={id}
            toggleDeleteModal={toggleDeleteModal}
          />
        </ModalContainer>
      )}
    </>
  );
};
PetsItem.propTypes = {
  petName: PropTypes.string.isRequired,
  petId: PropTypes.string,
  birthday: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};