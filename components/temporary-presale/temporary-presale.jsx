import React from 'react';
import { useContext, useEffect, useState } from 'react';
import PDFViewer from './pdf-viewer';

import PresaleContext from '../../contexts/presale-context';
import styles from './temporary-presale.module.scss';

function TemporaryPresale() {
  const {
    temporaryModalLoadedOnce,
    setTemporaryModalLoadedOnce,
    temporaryModalIsVisible,
    setTemporaryModalIsVisible,
  } = useContext(PresaleContext);

  useEffect(() => {
    if (!temporaryModalLoadedOnce) {
      setTimeout(() => {
        setTemporaryModalIsVisible(true);
        setTemporaryModalLoadedOnce(true);
      }, 3000);
    }
  }, []);

  const [file, setFile] = useState('/pdf-s/meghivas.pdf');
  const [pdfLanguage, setPdfLanguage] = useState('EN');
  const decorLineStyle = {
    left: pdfLanguage === 'EN' ? '4px' : '66px',
  };

  useEffect(() => {
    pdfLanguage === 'EN'
      ? setFile('/pdf-s/sample.pdf')
      : setFile('/pdf-s/meghivas.pdf');
  }, [pdfLanguage]);

  return (
    temporaryModalIsVisible && (
      <section className={styles.TemporaryPresale}>
        <h2>Temporary Presale</h2>
        <div className={styles.languageSelectorContainer}>
          <button onClick={() => setPdfLanguage('EN')}>English</button>
          <button onClick={() => setPdfLanguage('HU')}>Hungarian</button>
          <div className={styles.decorLine} style={decorLineStyle} />
        </div>
        <PDFViewer file={file} />
      </section>
    )
  );
}

export default TemporaryPresale;
