import { Hearts } from 'react-loader-spinner';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.box}>
      <Hearts
        height="150"
        width="150"
        color="var(--yellow-color)"
        ariaLabel="hearts-loading"
        wrapperClass={css.loader}
        visible={true}
      />
    </div>
  );
};

export default Loader;
