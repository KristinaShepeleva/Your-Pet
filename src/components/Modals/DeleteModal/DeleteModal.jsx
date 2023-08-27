import { useDispatch } from 'react-redux';

import css from './DeleteModal.module.css';
import { DeleteIcon } from 'helpers/icons';
import { deletePet } from 'redux/notices/operation';

const DeleteModal = ({ pet, toggleDeleteModal }) => {
  const dispatch = useDispatch();

  const deleteNotice = () => {
    const id = pet._id;
    dispatch(deletePet(id));
    toggleDeleteModal();
  };

  return (
    <div className={css.delete}>
      <h2 className={css.titleDelete}>Delete adverstiment?</h2>
      <div className={css.content}>
        <p className={css.textDelete}>
          Are you sure you want to delete
          <span className={css.span}>“{pet.title}”?</span>
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
        <button className={css.btnYes} onClick={deleteNotice}>
          Yes
          <DeleteIcon className={css.icon} />
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
