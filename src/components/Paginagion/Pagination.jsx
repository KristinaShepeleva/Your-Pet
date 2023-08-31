import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import css from './Pagination.module.css';
import { ArrowLeftIcon, ArrowRightIcon } from 'helpers/icons';

export const Paginagion = ({ handlePageChange, total, currentPage }) => {
  const totalPage = () => {
    if (total > 51) {
      return 50;
    } else {
      return total;
    }
  };

  const pages = totalPage();

  const shouldApplySmallStyle = pages < 5;

  const paginationClasses = [css.pagination];
  if (shouldApplySmallStyle) {
    paginationClasses.push(css['pagination-small']);
  }

  return (
    <ReactPaginate
      previousLabel={<ArrowLeftIcon />}
      nextLabel={<ArrowRightIcon />}
      breakLabel={'...'}
      breakClassName={css.break}
      pageCount={pages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={handlePageChange}
      containerClassName={paginationClasses.join(' ')}
      pageClassName={css.page}
      activeClassName={css.pageActive}
      previousClassName={css.previous}
      nextClassName={css.next}
      disabledClassName={css.disabled}
      forcePage={currentPage - 1}
    />
  );
};

Paginagion.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};
