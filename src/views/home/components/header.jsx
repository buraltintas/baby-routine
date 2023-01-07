import { useContext } from 'react';
import EggIcon from '../../../common/egg-icon';
import LanguageMenu from '../../../common/language-menu';
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
        <span>{babyInfo.name.toUpperCase()}</span>
      </div>
      <div className={styles.languageMenuContainer}>
        <LanguageMenu />
      </div>
    </div>
  );
};

export default Header;
