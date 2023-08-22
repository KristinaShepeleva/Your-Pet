import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';

import css from './LoginForm.module.css';
import { loginSchema } from 'schemas';
import CustomInput from 'components/CustomInput/CustomInput';
import {
  CheckIcon,
  CrossBigIcon,
  EyeClosedIcon,
  EyeOpenIcon,
} from 'helpers/icons';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { useState } from 'react';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const toogleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        {({ isValid, submitCount, values, errors }) => {
          const error = !isValid && submitCount > 0;
          return (
            <Form className={css.form}>
              <div>
                <div className={css.iconInput}>
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    isValid={isValid}
                    submitCount={submitCount}
                  />
                  {error && errors.email && (
                    <CrossBigIcon className={css.crossEmailIcon} />
                  )}
                  {!errors.email && values.email !== '' && (
                    <CheckIcon className={css.checkEmailIcon} />
                  )}
                </div>
                <div className={css.iconInput}>
                  <CustomInput
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    isValid={isValid}
                    submitCount={submitCount}
                    style={{ marginBottom: 0 }}
                  />
                  {error && errors.password && (
                    <CrossBigIcon className={css.crossIcon} />
                  )}
                  {!errors.password && values.password !== '' && (
                    <CheckIcon className={css.checkIcon} />
                  )}
                  <button
                    type="button"
                    onClick={toogleShowPassword}
                    className={css.eyeIcon}
                  >
                    {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </button>
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
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
