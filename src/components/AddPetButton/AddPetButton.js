import css from './AddPetButton.module.css';

import {PlusSmallIcon} from '../../helpers/icons'

const AddPetButton = () => { 



    return (
        <button className={css.addBtn}>
            <p className={css.textBtn}>Add Pet</p>
            <PlusSmallIcon className={css.addIcon}/>
        </button>
    )
}


export default AddPetButton;