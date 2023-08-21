import { useNavigate } from 'react-router-dom';
import {Logo} from '../../../helpers/icons';
import {LogoSmall} from '../../../helpers/icons';
import css from './Logo.module.css';



export default function LogoComponent({isMobile}) {
    const navigate = useNavigate();

    const navigateToMain = () => {
      navigate('/main');
    };
  return (
    <div className={css.logo} onClick={navigateToMain}>
      {isMobile ? <LogoSmall />: <Logo/>}
    </div>
  );
}