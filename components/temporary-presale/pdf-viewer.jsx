import { useContext, useEffect, useState } from 'react';
// import default react-pdf entry
import { Document, Page, pdfjs } from 'react-pdf';
import { AiOutlineClose } from 'react-icons/ai';
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from '../../pdf-worker';
import PresaleContext from '../../contexts/presale-context';

import styles from './temporary-presale.module.scss';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer({ file }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  const [device, setDevice] = useState('desktop');
  const [pdfWidth, setPdfWidth] = useState(350);

  const checkDevice = () => {
    if (window.innerWidth < 3000) {
      setDevice('monitor');
      setPdfWidth(1100);
    }
    if (window.innerWidth < 1220) {
      setDevice('desktop');
      setPdfWidth(900);
    }
    if (window.innerWidth < 1024) {
      setDevice('tablet');
      setPdfWidth(700);
    }
    if (window.innerWidth < 768) {
      setDevice('mobile-large');
      setPdfWidth(400);
    }
    if (window.innerWidth < 510) {
      setDevice('mobile-small');
      setPdfWidth(340);
    }
  };

  useEffect(() => {
    checkDevice();
  }, []);

  const { setTemporaryModalIsVisible } = useContext(PresaleContext);

  return (
    <div className={styles.pdfContainer}>
      <button
        className={styles.closeButton}
        onClick={() => setTemporaryModalIsVisible(false)}
      >
        <AiOutlineClose />
      </button>
      <div>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={pdfWidth}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
