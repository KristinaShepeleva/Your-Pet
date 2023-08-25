import { PetsList } from 'components/PetsList/PetsList';
import css from './PetsData.module.css';
import AddPetButton from 'components/NoticesPage/AddPetButton/AddPetButton';

export const PetsData = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.box}>
        {' '}
        <h2 className={css.title}>My pets:</h2>
        <AddPetButton />
      </div>

      <PetsList />
    </div>
  );
};
