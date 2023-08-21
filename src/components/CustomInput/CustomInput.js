import { useField } from 'formik';
import css from './CustomInput.module.css';

const CustomInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.error && meta.touched ? css.inputError : css.input}
      />
      {meta.error && meta.touched && (
        <div className={css.error}>{meta.error}</div>
      )}
    </>
  );
};

export default CustomInput;
