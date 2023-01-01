import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return <h1>{t('Welcome_Text')}</h1>;
};

export default Home;
