import css from './NoticesSearch.module.css';

import { SearchIcon, CrossBigIcon } from '../../../helpers/icons';
import { Field, Form, Formik } from 'formik';

const NoticesSearch = () => {
  const onSubmit = value => {
    console.log(value);
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
                  onClick={() => resetForm()}
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

export default NoticesSearch;
