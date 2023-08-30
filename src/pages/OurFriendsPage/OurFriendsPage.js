

import Container from 'components/Container/Container';
import css from './OurFrendsPage.module.css';

const OurFriends = () => {
  return (
    <Container>
      <h2 className={css.title}>Our friends</h2>
       <div className={css.empty}></div>;
    </Container>
  )

  
};

export default OurFriends;