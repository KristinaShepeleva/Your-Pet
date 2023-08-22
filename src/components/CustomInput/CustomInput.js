import { useField } from 'formik';
import css from './CustomInput.module.css';

const CustomInput = ({ submitCount, isValid, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        {...field}
        {...props}
        className={
          !isValid && submitCount > 0 && meta.error ? css.inputError : css.input
        }
      />
      {!isValid && submitCount > 0 && meta.error && (
        <div className={css.error}>{meta.error}</div>
      )}
    </>
  );
};

export default CustomInput;
