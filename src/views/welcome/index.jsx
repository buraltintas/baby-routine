import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EggIcon from '../../components/EggIcon';
import styles from './Welcome.module.css';
import { months } from '../../utils/months';
import LanguageMenu from '../../components/language-menu';
import { appContext } from '../../context';

const Welcome = () => {
  const { setBabyInfo } = useContext(appContext);
  const [s, setState] = useState({
    babyInfo: {
      name: '',
      gender: '',
      birthyear: '',
      birthmonth: '',
      birthday: '',
    },
  });
  const { t } = useTranslation();

  const changeBabyInfo = (node, value) => {
    setState({
      babyInfo: {
        ...s.babyInfo,
        [node]: value,
      },
    });
  };

  const saveBabyInfo = () => {
    setBabyInfo(s.babyInfo);
  };

  console.log(s.babyInfo);

  return (
    <div className={styles.container}>
      <LanguageMenu />
      <div className={styles.welcomeWrapper}>
        <div className={styles.iconWrapper}>
          <EggIcon />
        </div>
        <h1 className={styles.title}>{t('Welcome_Title')}</h1>
        <p className={styles.text}>{t('Welcome_Text')}</p>
        <p className={styles.text}>{t('Welcome_Text_Start')}</p>
        <div className={styles.form}>
          <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField
                required
                label={t('Baby_Info_Name')}
                value={s.babyInfo.name}
                onChange={(e) => changeBabyInfo('name', e.target.value)}
              />
            </FormControl>
            <FormControl required sx={{ m: 1, minWidth: 100 }}>
              <InputLabel>{t('Baby_Info_Gender')}</InputLabel>
              <Select
                required
                value={s.babyInfo.gender}
                label='Baby_Info_Gender'
                onChange={(e) => changeBabyInfo('gender', e.target.value)}
              >
                <MenuItem value={'girl'}>{t('Baby_Info_Gender_Girl')}</MenuItem>
                <MenuItem value={'boy'}>{t('Baby_Info_Gender_Boy')}</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
              <TextField
                required
                label={t('Baby_Info_Birth_Year')}
                value={s.babyInfo.birthyear}
                inputProps={{ maxLength: 4 }}
                onChange={(e) => changeBabyInfo('birthyear', e.target.value)}
              />
            </FormControl>
            <FormControl required sx={{ m: 1, minWidth: 100 }}>
              <InputLabel>{t('Baby_Info_Birth_Month')}</InputLabel>
              <Select
                required
                value={s.babyInfo.birthmonth}
                label='Baby_Info_Birth_Month'
                onChange={(e) => changeBabyInfo('birthmonth', e.target.value)}
              >
                {months.map((month, i) => {
                  return (
                    <MenuItem key={`mi${month.name}${i + 1}`} value={month}>
                      {t(month.name)}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, minWidth: 80 }}>
              <InputLabel>{t('Baby_Info_Birth_Day')}</InputLabel>
              <Select
                required
                value={s.babyInfo.birthday}
                label='Baby_Info_Birth_Day'
                onChange={(e) => changeBabyInfo('birthday', e.target.value)}
              >
                {[...Array(31).keys()].map((num) => {
                  return (
                    <MenuItem key={num + 1} value={num + 1}>
                      {num + 1}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <Alert align='left' severity='info'>
          {t('Welcome_Info_Warning')}
        </Alert>
        <div className={styles.buttonContainer}>
          <Button variant='contained' size='large' onClick={saveBabyInfo}>
            {t('Save_And_Continue')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
