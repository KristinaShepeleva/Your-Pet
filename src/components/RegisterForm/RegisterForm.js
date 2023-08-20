import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';

import css from './RegisterForm.module.css';
import { registerSchema } from 'schemas';
import CustomInput from 'components/CustomInput/CustomInput';

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const onSubmit = (value, actions) => {
  console.log(value);
  actions.resetForm();
};

const RegisterForm = () => {
  return (
    <>
      <h1 className={css.title}>Registration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {props => (
          <Form>
            <CustomInput type="name" name="username" placeholder="Name" />
            <CustomInput type="email" name="email" placeholder="Email" />
            <CustomInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <CustomInput
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
            />
            <button type="submit">Registration</button>
          </Form>
        )}
      </Formik>
      <div>
        Already have an account?
        <NavLink to="/login">Login</NavLink>
      </div>
    </>
  );
};

export default RegisterForm;
