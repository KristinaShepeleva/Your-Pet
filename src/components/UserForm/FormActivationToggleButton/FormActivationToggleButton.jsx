import PropTypes from 'prop-types';

import css from './FormActivationToggleButton.module.css';

export const FormActivationToggleButton = ({ toggle, type, iconComponent: Component }) => {
 
  return (
    <button className={css.bt} type={type} onClick={toggle}>
      <Component className={type === 'button' ? css.icon : ""} />
    </button>
  );
};

FormActivationToggleButton.propTypes = {

  iconComponent: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};