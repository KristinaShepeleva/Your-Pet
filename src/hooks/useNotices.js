import { useSelector } from 'react-redux';
import {
  selectIsNotLoading,
  selectNotices,
  selectOneNotice,
} from 'redux/notices/selectors';

export const useNotices = () => {
  return {
    notices: useSelector(selectNotices),
    noticeById: useSelector(selectOneNotice),
    isNotLoading: useSelector(selectIsNotLoading),
  };
};
