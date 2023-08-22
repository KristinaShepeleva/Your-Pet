import css from './NoticesFilters.module.css'

import {FilterTwoIcon} from '../../helpers/icons'

const NoticesFilters = () => { 


    return (
        <button className={css.filterBtn}
            type="button"
            aria-label="Show filters"
        >
            <p className={css.filtertext}>Filter</p>
            <FilterTwoIcon className={css.filtericon}/>
        </button>
    )
}


export default NoticesFilters;