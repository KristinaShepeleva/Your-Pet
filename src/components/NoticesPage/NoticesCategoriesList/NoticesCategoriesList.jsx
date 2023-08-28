import css from './NoticesCategoriesList.module.css';
import NoticesItem from '../NoticesItem/NoticesItem';
import { useNotices } from 'hooks';

const NoticesCategoriesList = () => {
  const { notices } = useNotices();

  // console.log(notices);
  return (
    <div className={css.listCardContainer}>
      <ul className={css.listContainer}>
        {notices.map(pet => (
          <NoticesItem key={pet._id} pet={pet} />
        ))}
      </ul>
    </div>
  );
};

export default NoticesCategoriesList;
