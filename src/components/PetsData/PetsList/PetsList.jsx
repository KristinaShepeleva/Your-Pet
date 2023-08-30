import { PetsItem } from 'components/PetsData/PetsItem/PetsItem';
import { Empty } from 'components/Empty/Empty';
import { selectPets } from 'redux/pets/selectors';
import { useSelector } from 'react-redux';

export const PetsList = () => {
  const ownPets = useSelector(selectPets);
  return (
    <>
      {ownPets.length === 0 ? (
        <Empty text='You don`t have any pets. You can add them. Click on the button "Add pet"' />
      ) : (
        <ul>
          {ownPets.map(({ _id, name, birthday, type, comments, photoURL }) => (
            <PetsItem
              key={_id}
              id={_id}
              petName={name}
              birthday={birthday}
              breed={type}
              comments={comments}
              image={photoURL}
            />
          ))}
        </ul>
      )}
    </>
  );
};
