import { useState } from 'react';
// import default react-pdf entry
import { Document, Page, pdfjs } from 'react-pdf';

// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from '../../pdf-worker';

import styles from './seed-sale.module.scss';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer({ file, pdfWidth }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  // const { setTemporaryModalIsVisible } = useContext(PresaleContext);

  const extractTextCompleted = (args) => {
    // Extract the Complete text of load document
    console.log(args);
    console.log(args.documentTextCollection[1]);
    // Extract the Text data.
    console.log(args.documentTextCollection[1][1].TextData);
    // Extract Text in the Page.
    console.log(args.documentTextCollection[1][1].PageText);
    // Extract Text along with Bounds
    console.log(args.documentTextCollection[1][1].TextData[0].Bounds);
  };
  return (
    <div className={styles.pdfContainer}>
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
  );
}
