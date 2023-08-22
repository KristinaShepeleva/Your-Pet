import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';

import css from './LoginForm.module.css';
import { loginSchema } from 'schemas';
import CustomInput from 'components/CustomInput/CustomInput';
import { CheckIcon, CrossBigIcon, EyeClosedIcon } from 'helpers/icons';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (value, actions) => {
    dispatch(login(value));
    actions.resetForm();
  };
  return (
    <div className={css.container}>
      <h1 className={css.title}>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {props => (
          <Form className={css.form}>
            <div>
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
                  style={{ marginBottom: 0 }}
                />
                <CheckIcon className={css.checkIcon} />
                <CrossBigIcon className={css.crossIcon} />
                <EyeClosedIcon className={css.eyeIcon} />
              </div>
            </div>
            <div>
              <button type="submit" className={css.btn}>
                Login
              </button>
              <div className={css.linkContainer}>
                Don't have an account?
                <NavLink to="/register" className={css.link}>
                  Register
                </NavLink>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
