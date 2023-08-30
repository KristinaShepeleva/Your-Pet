import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import css from './DeleteModal.module.css';
import { DeleteIcon } from 'helpers/icons';
import {
  allNoties,
  deletePet,
  favoriteList,
  myNotices,
} from 'redux/notices/operation';
import { useLocation } from 'react-router-dom';
import { deleteUserPet } from 'redux/pets/petsOperations';

const DeleteModal = ({ nameModal, title, id, toggleDeleteModal }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '');
  const category = pathSegments[1];

  const deleteMyPet = async () => {
    await dispatch(deleteUserPet(id));
     toggleDeleteModal();
  }
  const deleteNotice = async () => {
   
  await dispatch(deletePet(id));
    
    if (category === 'favorite') {
      await dispatch(favoriteList());
    } else if (category === 'own') {
      await dispatch(myNotices());
    }  else {
      const request = {
        category,
        search: '',
      };
      await dispatch(allNoties(request));
    }
    toggleDeleteModal();
  };
  return (
    <div className={css.delete}>
      <h2 className={css.titleDelete}>{nameModal}</h2>
      <div className={css.content}>
        <p className={css.textDelete}>
          Are you sure you want to delete
          <span className={css.span}>{title}?</span>
        </p>
        <p className={css.textDelete}> You can`t undo this action.</p>
      </div>
      <div className={css.btnContainer}>
        <button
          type="button"
          className={css.btnCancel}
          onClick={toggleDeleteModal}
        >
          Cancel
        </button>
        <button className={css.btnYes} onClick={ pathSegments[0] === 'user' ? deleteMyPet : deleteNotice}>
          Yes
          <DeleteIcon className={css.icon} />
        </button>
      </div>
    </div>
  );
};

DeleteModal.propTypes = {
  nameModal: PropTypes.string.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
};

export default DeleteModal;
