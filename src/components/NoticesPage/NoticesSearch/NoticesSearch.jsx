import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';

import css from './NoticesSearch.module.css';
import { SearchIcon, CrossBigIcon } from '../../../helpers/icons';

const NoticesSearch = ({ setSearch }) => {
  const onSubmit = value => {
    const { search } = value;
    setSearch(search);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Find your favorite pet</h2>
      <Formik
        initialValues={{ search: '' }}
        //   {/* validationSchema={loginSchema} */}
        onSubmit={onSubmit}
      >
        {({ resetForm, values }) => {
          return (
            <Form className={css.form}>
              <Field
                autoComplete="off"
                type="text"
                name="search"
                placeholder="Search"
                className={css.input}
              />
              <button type="submit" className={css.searchBtn}>
                <SearchIcon />
              </button>
              {values.search && (
                <button
                  className={css.clearBtn}
                  type="button"
                  onClick={() => {
                    setSearch('');
                    resetForm();
                  }}
                >
                  <CrossBigIcon className={css.icon} />
                </button>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
NoticesSearch.propTypes = {
  setSearch: PropTypes.func.isRequired,
};
export default NoticesSearch;
