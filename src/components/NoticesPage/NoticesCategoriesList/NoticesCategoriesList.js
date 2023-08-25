import { useState } from 'react';

import css from './NoticesCategoriesList.module.css';
// import defaultImg from '../../images/defaul-img/defaulimg.png';

import { notices } from './test';

// import { useDispatch } from 'react-redux';
// import { allNoties } from 'redux/notices/operation';
import NoticesItem from '../NoticesItem/NoticesItem';

const NoticesCategoriesList = () => {
  const [isPetsModalOpen, setIsPetsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [petInfo, setPetInfo] = useState(false);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(allNoties());
  // }, [dispatch]);

  const toggleDeleteModal = pet => {
    setPetInfo(pet);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const togglePetsModal = pet => {
    setPetInfo(pet);
    setIsPetsModalOpen(!isPetsModalOpen);
  };
  return (
    <div className={css.listCardContainer}>
      <ul className={css.listContainer}>
        {notices.map(pet => (
          <NoticesItem
            key={pet._id}
            toggleDeleteModal={toggleDeleteModal}
            togglePetsModal={togglePetsModal}
            pet={pet}
            petInfo={petInfo}
            isPetsModalOpen={isPetsModalOpen}
            isDeleteModalOpen={isDeleteModalOpen}
          />
        ))}
      </ul>
    </div>
  );
};

export default NoticesCategoriesList;
