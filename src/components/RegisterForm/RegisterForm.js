import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';

import css from './RegisterForm.module.css';
import { registerSchema } from 'schemas';
import CustomInput from 'components/CustomInput/CustomInput';
import { CheckIcon, CrossBigIcon, EyeClosedIcon } from 'helpers/icons';

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const onSubmit = async (value, actions) => {
  console.log(value);
  console.log(actions);

  actions.setErrors();
  actions.resetForm();
};

const RegisterForm = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Registration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
        className={css.formik}
      >
        {props => (
          <Form className={css.form}>
            <CustomInput type="name" name="username" placeholder="Name" />
            <div className={css.iconInput}>
              <CustomInput type="email" name="email" placeholder="Email" />
              <CheckIcon className={css.checkEmailIcon} />
              <CrossBigIcon className={css.crossIcon} />
            </div>
            <div className={css.iconInput}>
              <CustomInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <CheckIcon className={css.checkIcon} />
              <CrossBigIcon className={css.crossIcon} />
              <EyeClosedIcon className={css.eyeIcon} />
            </div>
            <div className={css.iconInput}>
              <CustomInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                style={{ marginBottom: 0 }}
              />
              <CheckIcon className={css.checkIcon} />
              <CrossBigIcon className={css.crossIcon} />
              <EyeClosedIcon className={css.eyeIcon} />
            </div>
            <button className={css.btn} type="submit">
              Registration
            </button>
          </Form>
        )}
      </Formik>
      <div className={css.linkContainer}>
        Already have an account?
        <NavLink to="/login" className={css.link}>
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default RegisterForm;
