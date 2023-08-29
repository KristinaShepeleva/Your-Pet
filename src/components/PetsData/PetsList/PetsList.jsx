import { PetsItem } from 'components/PetsData/PetsItem/PetsItem';
import { Empty } from 'components/Emty/Emty';
import bg2 from '../../../images/404-dsc-2x.png';
// import { selectPets } from 'redux/pets/selectors';
// import { useSelector } from 'react-redux';
// import { selectError } from 'redux/pets/selectors';
// import { ErrorText } from 'components/ErrorText/ErrorText';
const pets = [
  {
    petId: '3fa85f64-5717-4562-b3fc-2c963f66afa67',
    name: 'Bruno',
    birthday: '00.00.0000',
    type: 'Spitz',
    comments: 'Something about pet',
    image: bg2,
    public_id: '47gh49tyh',
  },
  {
    petId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    name: 'Bruno',
    birthday: '00.00.0000',
    type: 'Spitz',
    comments: "Jack is aJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome Basenji handsome Basenji with short, shiny red fur and perky ears. He's an active and intelligent dog that loves to explore and play. Jack is independent and strong-willed, but also affectionate and loyal to his family. He's a curious and energetic companion that brings joy and adventure to his family's life.",
    image: bg2,
    public_id: '47g129tyh',
  },
];
export const PetsList = () => {
  // const ownPets = useSelector(selectPets);
  // const error = useSelector(selectError)
  return (
      <>
      {/* error ? (<ErrorText />): */}
      { pets.length === 0 ? (
        <Empty text='You don`t have any pets. You can add them. Click on the button "Add pet"' />
      ) : (
        <ul>
          {pets.map(({ petId, name, birthday, type, comments, image }) => (
            <PetsItem
              key={petId}
              id={petId}
              petName={name}
              birthday={birthday}
              breed={type}
              comments={comments}
              image={image}
            />
          ))}
        </ul>
      )}
    </>
  );
};
