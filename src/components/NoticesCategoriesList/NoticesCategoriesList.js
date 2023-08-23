

import css from './NoticesCategoriesList.module.css';
// import defaultImg from '../../images/defaul-img/defaulimg.png';
import { DeleteIcon, HeartFillIcon, LocationIcon, ClockIcon, MaleIcon, FamileIcon } from '../../helpers/icons';




import {notices} from './test'

const NoticesCategoriesList = ({handlePetsModal, handleDeleteModal}) => { 
    

    return (
        <ul className={css.listContainer}>
            {notices.map(pet => (
                 <li key={pet._id} className={css.listItem}>
               
                <div className={css.imgContainer} >
                    <img className={css.img}
                src={pet.imgUrl} alt="Animals" />
                    <p className={css.category}>{pet.category}</p>
                    <button className={css.favoritBtn}
                        type="button"
                            // onClick={console.log("toggleFavorites(pet)")}
                        >
                        <HeartFillIcon className={css.fillIcon}/>
            
                    </button>
                    <button className={css.deleteBtn}
                            onClick={handleDeleteModal}
                            type="button"
                        > 
                        <DeleteIcon/>
                    </button>
                    <ul className={css.infoWrapper}>
                        <li className={css.info}>
                            <LocationIcon/>
                            <p>{pet.location}</p>
                        </li>
                        <li className={css.info}>
                            <ClockIcon/>
                            <p>{pet.age}</p>
                        </li>
                        <li className={css.info}>
                            {pet.sex === 'male' ? <MaleIcon /> : <FamileIcon />}
                           
                            <p>{pet.sex}</p>
                        </li>
                        </ul>
                        </div>
                    <div className={css.bottonCard}>
                        <h3 className={css.titleCard}>{pet.title}</h3>
                        <button className={css.button}
                            type="button"
                            text="Learn more"
                            onClick={handlePetsModal}
                        >Learn more</button>
                    </div>
              
            </li>
             ))}
            
        </ul>
    )
}


export default NoticesCategoriesList;