
import css from './FormActivationToggleButton.module.css';

export const FormActivationToggleButton = ({ toggle, type, iconComponent: Component }) => {
 
  return (
    <button className={css.bt} type={type} onClick={toggle}>
      <Component className={type === 'button' ? css.icon : ""} />
    </button>
  );
};
