import { UserForm } from 'components/UserForm/Form/UserForm';
import css from './UserData.module.css';

export const UserData = () => {
  return (
    <div className={css.box}>
      <h2 className={css.title}>My information:</h2>
      <UserForm />
    </div>
  );
};
