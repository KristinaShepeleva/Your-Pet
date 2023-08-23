import { Link } from 'react-router-dom';
import {PawprintIcon} from '../../helpers/icons';
import styles from './NotFound.module.css';

import NotFound_dsc1x from "../../images/404-dsc-1x.png"
import NotFound_dsc2x from "../../images/404-dsc-2x.png"
import NotFound_tbl1x from "../../images/404-tbl-1x.png"
import NotFound_tbl2x from "../../images/404-tbl-2x.png"
import NotFound_mob1x from "../../images/404-mob-1x.png"
import NotFound_mob2x from "../../images/404-mob-2x.png"

const NotFound = () => {
        return (
            <section className={styles.section}>
              <div className={styles.container}>
                <h2 className={styles.text}>Ooops! This page not found: (</h2>
                <div className={styles.wrapper}>
                  <picture>
                    <source
                      media="(min-width: 1280px)"
                      srcSet={`${NotFound_dsc1x}, ${NotFound_dsc2x} 2x`}
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet={`${NotFound_tbl1x}, ${NotFound_tbl2x} 2x`}
                    />
                    <img 
                      src={NotFound_mob1x}
                      srcSet={`${NotFound_mob1x}, ${NotFound_mob2x} 2x`}
                      alt="Cat"
                    />
                  </picture>
                </div>
                <Link to="/">
                  <button className={styles.btn}>
                    To main page <PawprintIcon className={styles.icon} />
                  </button>
                </Link>
              </div>
            </section>
          );
        
    
}

export default NotFound;