import { useField } from 'formik';
import css from './CustomInput.module.css';

const CustomInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.errors && meta.touched ? css.inputError : css.input}
      />
      {meta.error && meta.touched && <p className={css.error}>{meta.error}</p>}
    </>
  );
};

export default CustomInput;
