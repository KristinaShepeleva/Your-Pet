import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';

import css from './LoginForm.module.css';
import { loginSchema } from 'schemas';
import CustomInput from 'components/CustomInput/CustomInput';

const initialValues = {
  email: '',
  password: '',
};

const onSubmit = (value, actions) => {
  console.log(value);
  actions.resetForm();
};

const LoginForm = () => {
  return (
    <>
      <h1 className={css.title}>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {props => (
          <Form>
            <CustomInput type="email" name="email" placeholder="Email" />
            <CustomInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
      <div>
        Don't have an account?
        <NavLink to="/register">Register</NavLink>
      </div>
    </>
  );
};

export default LoginForm;
