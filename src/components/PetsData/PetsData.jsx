import { PetsList } from 'components/PetsData/PetsList/PetsList';
import css from './PetsData.module.css';
import AddPetButton from 'components/NoticesPage/AddPetButton/AddPetButton';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box/Box';

export const PetsData = () => {
  return (
    
     <Box>  
      <div className={css.box}>
        
        <h2 className={css.title}>My pets:</h2>
        <Link to="/add-pet"> 
          <AddPetButton />
          </Link>
      </div>

        <PetsList />
        </Box> 
   
  );
};
