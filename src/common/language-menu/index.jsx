import Switch from '@mui/material/Switch';
import styles from './LanguageMenu.module.css';
import en from '../../assets/en.png';
import tr from '../../assets/tr.png';
import { useContext } from 'react';
import { appContext } from '../../context';

const LanguageMenu = () => {
  const { language, setLanguage } = useContext(appContext);
  const changeLanguage = () => {
    if (language === 'tr') {
      setLanguage('en');
    } else {
      setLanguage('tr');
    }
  };
  return (
    <div className={styles.lang}>
      <img className={styles.flag} src={en} alt='Great Britain flag' />
      <Switch
        checked={language === 'tr'}
        onChange={changeLanguage}
        color='default'
        size='small'
      />
      <img className={styles.flag} src={tr} alt='Turkish flag' />
    </div>
  );
};

export default LanguageMenu;
