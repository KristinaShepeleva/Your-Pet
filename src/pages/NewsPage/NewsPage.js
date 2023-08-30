import Container from 'components/Container/Container';
import css from './NewsPage.module.css';

const News = () => {
  return (
    <Container>
      <h2 className={css.title}>News</h2>
       <div className={css.empty}></div>;
    </Container>
  )

  
};

export default News;
