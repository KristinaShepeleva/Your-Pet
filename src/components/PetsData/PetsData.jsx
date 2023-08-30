import { PetsList } from 'components/PetsData/PetsList/PetsList';
import css from './PetsData.module.css';
import AddPetButton from 'components/NoticesPage/AddPetButton/AddPetButton';
import { Link } from 'react-router-dom';

export const PetsData = () => {
  return (
    <div className={css.boxPetData}>
      <div className={css.box}>
        
        <h2 className={css.title}>My pets:</h2>
        <Link to="/add-pet"> 
          <AddPetButton />
          </Link>
      </div>

      <PetsList />
    </div>
  );
};
