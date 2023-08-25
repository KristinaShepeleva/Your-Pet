import AddPetButton from 'components/AddPetButton/AddPetButton';
import { PetsList } from 'components/PetsList/PetsList';
import css from './PetsData.module.css';

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
