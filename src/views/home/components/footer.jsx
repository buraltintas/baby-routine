import EggIcon from '../../../common/EggIcon';
import GithubIcon from '../../../common/GithubIcon';
import styles from './footer.module.css';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <div className={styles.iconContainer}>
          <EggIcon />
        </div>
        <span className={styles.copyRightText}>
          &copy;{new Date().getFullYear()}
          <a
            className={styles.githubLink}
            href='https://github.com/buraltintas'
            target='_blank'
          >
            <GithubIcon />
          </a>
        </span>
      </div>
      <div className={styles.footerRight}>
        <Button variant='outlined' size='small' color='error'>
          {t('Delete_Data')}
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
