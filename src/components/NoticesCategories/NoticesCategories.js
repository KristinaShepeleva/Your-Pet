import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './NoticesCategories.module.css'

const NoticesCategories = ({ isUser }) => {


    return (
        <ul className={css.wpapperCategoryList}>
            <li className={css.categoryBtn}>
                <Link to="sell">sell</Link>
            </li>
            <li className={css.categoryBtn}>
                <Link to="lost-found">lost/found</Link>
            </li>
            <li className={css.categoryBtn}>
                <Link to="in-good-hands">in good hands</Link>
            </li>

            {isUser && (<> <li className={css.categoryBtn}>
                <Link to="favorite">favorite</Link>
            </li>
                <li className={css.categoryBtn}>
                    <Link to="own">my ads</Link>
                </li> </>)}
        
        </ul>
         
    )
};


NoticesCategories.propTypes = {
  isUser: PropTypes.bool.isRequired,
};

export default NoticesCategories;