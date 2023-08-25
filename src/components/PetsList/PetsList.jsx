import { PetsItem } from 'PetsItem/PetsItem';
import { Empty } from 'components/Emty/Emty';
import bg2 from '../../images/404-dsc-1x.png';
const pets = [
  {
    petId: '497349tyh',
    name: 'Bruno',
    birthday: '00.00.0000',
    breed: 'Spitz',
    comments: 'Something about pet',
    image: bg2,
    public_id: '47gh49tyh',
  },
  {
    petId: '485nhfvi9t',
    name: 'Bruno',
    birthday: '00.00.0000',
    breed: 'Spitz',
    comments: "Jack is aJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome Basenji handsome Basenji with short, shiny red fur and perky ears. He's an active and intelligent dog that loves to explore and play. Jack is independent and strong-willed, but also affectionate and loyal to his family. He's a curious and energetic companion that brings joy and adventure to his family's life.",
    image: bg2,
    public_id: '47g129tyh',
  },
];
export const PetsList = () => {
  return (
      <>
      
      {pets.length === 0 ? (
        <Empty text='You don`t have any pets. You can add them. Click on the button "Add pet"' />
      ) : (
        <ul>
          {pets.map(({ petId, name, birthday, breed, comments, image }) => (
            <PetsItem
              key={petId}
              id={petId}
              petName={name}
              birthday={birthday}
              breed={breed}
              comments={comments}
              image={image}
            />
          ))}
        </ul>
      )}
    </>
  );
};
