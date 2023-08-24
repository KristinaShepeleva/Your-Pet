// import { useDispatch } from 'react-redux';
import css from './DeleteModal.module.css';
import { DeleteIcon } from 'helpers/icons';

const DeleteModal = ({ pet, toggleDeleteModal }) => {
  // const dispatch = useDispatch();

  const deletePet = () => {
    // dispatch(deletePet(pet._id));
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
        <button className={css.btnYes} onClick={deletePet}>
          Yes
          <DeleteIcon className={css.icon} />
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
