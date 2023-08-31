import PropTypes from 'prop-types';

import css from './NoticesCategoriesList.module.css';
import NoticesItem from '../NoticesItem/NoticesItem';
import { useNotices } from 'hooks';
import { Empty } from 'components/Empty/Empty';

const NoticesCategoriesList = ({ currentPage }) => {
  const { notices } = useNotices();

  return (
    <div className={css.listCardContainer}>
      {notices.length !== 0 ? (
        <ul className={css.listContainer}>
          {notices.map(pet => (
            <NoticesItem key={pet._id} pet={pet} currentPage={currentPage} />
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </div>
  );
};
NoticesCategoriesList.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

export default NoticesCategoriesList;
