import { useTranslation } from 'react-i18next';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import styles from './sleeps.module.css';
import Container from './container';
import BedIcon from '../../../common/bed-icon';
import SectionTitle from './section-title';

const Sleeps = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className={styles.sleepsContainer}>
        <SectionTitle title={t('Sleeps')}>
          <BedIcon />
        </SectionTitle>
        <div className={styles.addSleepContainer}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField required label={'tarih'} />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField required label={'güne başlama saati'} />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField required label={'uyanıklık süresi'} />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField required label={'1. uyku'} />
          </FormControl>
        </div>
      </div>
    </Container>
  );
};

export default Sleeps;
