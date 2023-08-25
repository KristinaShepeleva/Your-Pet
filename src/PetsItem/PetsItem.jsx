import { DeleteIcon } from 'helpers/icons';
import css from './PetsItem.module.css';

export const PetsItem = ({
  petId,
  petName,
  birthday,
  breed,
  comments,
  image,
}) => {
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
              {' '}
              <p className={css.text}>
                <span className={css.title}>Date of birth:</span> {birthday}
              </p>{' '}
            </li>
            <li>
              <p className={css.text}>
                <span className={css.title}>Type:</span> {breed}
              </p>{' '}
            </li>
            <li>
              {' '}
              <p className={css.text}>
                <span className={css.title}>Comments:</span> {comments}
              </p>{' '}
            </li>
          </ul>
            <button className={css.bt} type="button">
          <DeleteIcon className={css.icon} />
        </button>
       
      </li>
    </>
  );
};
