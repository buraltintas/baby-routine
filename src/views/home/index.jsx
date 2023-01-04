import Footer from './components/footer';
import Header from './components/header';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
