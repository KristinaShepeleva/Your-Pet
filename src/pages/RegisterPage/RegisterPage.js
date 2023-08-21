import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';
const RegisterPage = () => {
  return (
    <div className={css.registerPage}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
