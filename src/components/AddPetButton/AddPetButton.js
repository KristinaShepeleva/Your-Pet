import css from './AddPetButton.module.css';

import { PlusSmallIcon, PlusBigIcon } from '../../helpers/icons';


const AddPetButton = () => { 



    return (
        <button className={css.addBtn}>

            <PlusSmallIcon className={css.addIcon} />
            <PlusBigIcon className={css.addIconBig}/>
            <p className={css.textBtn}>Add Pet</p>
            
        </button>
    )
}


export default AddPetButton;