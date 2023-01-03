import { useContext } from 'react';
import EggIcon from '../../../common/EggIcon';
import { appContext } from '../../../context';
import styles from './header.module.css';

const Header = () => {
  const { babyInfo } = useContext(appContext);

  return (
    <div className={styles.header}>
      <div className={styles.nameContainer}>
        <div className={styles.headerIcon}>
          <EggIcon />
        </div>
        <span>{babyInfo.name}</span>
      </div>
    </div>
  );
};

export default Header;
