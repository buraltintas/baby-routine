import Footer from './components/footer';
import Header from './components/header';
import Sleeps from './components/sleeps';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Sleeps />
      <Footer />
    </div>
  );
};

export default Home;
