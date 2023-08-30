import PropTypes from 'prop-types';
import css from './Box.module.css'
export const Box = ({children}) => {
    return (
        <div className={css.box}>{children}</div>
    )
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
