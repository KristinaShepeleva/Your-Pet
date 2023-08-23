import PropTypes from 'prop-types';
import css from './AddPetButton.module.css';

import { PlusSmallIcon, PlusBigIcon } from '../../helpers/icons';

const AddPetButton = ({handeModal}) => { 

    return (
        <button onClick={handeModal} className={css.addBtn} type="button">
        <PlusSmallIcon className={css.addIcon} />
        <PlusBigIcon className={css.addIconBig}/>
         <p className={css.textBtn}>Add Pet</p>   
        </button>
    )
}

AddPetButton.propTypes = {
  handeModal: PropTypes.func.isRequired,
};

export default AddPetButton;