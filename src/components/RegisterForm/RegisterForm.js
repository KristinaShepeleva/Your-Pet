import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';

import css from './RegisterForm.module.css';
import { registerSchema } from 'schemas';
import CustomInput from 'components/CustomInput/CustomInput';
import {
  CheckIcon,
  CrossBigIcon,
  EyeClosedIcon,
  EyeOpenIcon,
} from 'helpers/icons';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/auth/authOperations';
import { useState } from 'react';

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();

  const toogleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toogleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (value, actions) => {
    const newUser = {
      name: value.username,
      email: value.email,
      password: value.password,
    };
    dispatch(createUser(newUser));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Registration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
        className={css.formik}
      >
        {({ isValid, submitCount, values, errors }) => {
          const error = !isValid && submitCount > 0;
          return (
            <Form className={css.form}>
              <div className={css.iconInput}>
                <CustomInput
                  type="name"
                  name="username"
                  placeholder="Name"
                  isValid={isValid}
                  submitCount={submitCount}
                />
                {error && errors.username && (
                  <CrossBigIcon className={css.crossEmailIcon} />
                )}
                {!errors.username && values.username !== '' && (
                  <CheckIcon className={css.checkEmailIcon} />
                )}
              </div>
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
              <div className={css.iconInput}>
                <CustomInput
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  isValid={isValid}
                  submitCount={submitCount}
                  style={{ marginBottom: 0 }}
                />
                {error && errors.confirmPassword && (
                  <CrossBigIcon className={css.crossIcon} />
                )}
                {!errors.confirmPassword && values.confirmPassword !== '' && (
                  <CheckIcon className={css.checkIcon} />
                )}
                <button
                  type="button"
                  onClick={toogleShowConfirmPassword}
                  className={css.eyeIcon}
                >
                  {showConfirmPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </button>
              </div>
              <button className={css.btn} type="submit">
                Registration
              </button>
            </Form>
          );
        }}
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
