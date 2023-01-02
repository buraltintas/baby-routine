import React, { useEffect, useState } from 'react';
import * as i18n from 'i18next';

const appContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasBabyInfo, setHasBabyInfo] = useState(
    localStorage.getItem('babyInfo') ? true : false
  );
  const [babyInfo, setBabyInfo] = useState(
    localStorage.getItem('babyInfo') || null
  );
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'tr'
  );

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    if (localStorage.getItem('language')) {
      setLanguage(localStorage.getItem('language'));
    } else {
      localStorage.setItem('language', language);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('babyInfo')) {
      setHasBabyInfo(true);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (babyInfo && !localStorage.getItem('babyInfo')) {
      localStorage.setItem('babyInfo', JSON.stringify(babyInfo));
    }
  }, [babyInfo]);

  return (
    <appContext.Provider
      value={{
        isLoading,
        setIsLoading,
        language,
        setLanguage,
        hasBabyInfo,
        setHasBabyInfo,
        babyInfo,
        setBabyInfo,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export { appContext, AppProvider };
