import EggIcon from '../../../common/egg-icon';
import GithubIcon from '../../../common/github-icon';
import styles from './footer.module.css';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { appContext } from '../../../context';

const Footer = () => {
  const { t } = useTranslation();

  const { deleteData } = useContext(appContext);

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
        <Button
          variant='outlined'
          size='small'
          color='error'
          onClick={deleteData}
        >
          {t('Delete_Data')}
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
