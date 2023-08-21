import styles from './Main.module.css';
import dogsMobile1x from '../../images/pictures-mob-1x.png';
import dogsMobile2x from '../../images/pictures-mob-2x.png';
import dogsTat1x from '../../images/pictures-tbl-1x.png';
import dogsTab2x from '../../images/pictures-tbl-2x.png';
import dogsDesc1x from '../../images/pictures-dsc-1x.png';
import dogsDesc2x from '../../images/pictures-dsc-2x.png';

const Main = () => {
  return (
    <section className={styles.sectionMain}>
      <div className="container">
        <div className={styles.positionText}>
          <div>
            <h1 className={styles.text}>Take good care of your small pets</h1>
          </div>

          <div className={styles.wrapper}>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${dogsDesc1x}, ${dogsDesc2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${dogsTat1x}, ${dogsTab2x} 2x`}
              />
              <img
                src={dogsMobile1x}
                srcSet={`${dogsMobile1x}, ${dogsMobile2x} 2x`}
                alt="Animals"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Main;