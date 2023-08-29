import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import css from './LoginForm.module.css';
import { loginSchema } from 'schemas';
import CustomInput from 'components/CustomInput/CustomInput';
import {
  CheckIcon,
  CrossBigIcon,
  EyeClosedIcon,
  EyeOpenIcon,
} from 'helpers/icons';
import { login } from 'redux/auth/authOperations';

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

  const onSubmit = value => {
    dispatch(login(value)).then(data => {
      const error = data.payload;
      if (error.status === 401) {
        return toast.error(`${error.message}`);
      } else if (error.status === 400) {
        return toast.error('Invalid Email');
      }
    });
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
                <div>
                  <button type="submit" className={css.btn}>
                    Login
                  </button>
                  <div className={css.linkContainer}>
                    <p>Don't have an account? </p>
                    <NavLink to="/register" className={css.link}>
                      Register
                    </NavLink>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      {/* <ToastContainer autoClose={3000} /> */}
    </div>
  );
};

export default LoginForm;
