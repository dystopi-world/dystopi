import { useState, useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import Button from '../button/button';
import PresaleContext from '../../contexts/presale-context';
import styles from './presale.module.scss';

function Presale() {
  const { isVisible, setIsVisible } = useContext(PresaleContext);

  const [email, setEmail] = useState('');
  const [state, setState] = useState('IDLE');
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async (event) => {
    event.preventDefault();
    setState('LOADING');
    setErrorMessage(null);
    try {
      const response = await axios.post('/api/newsletter', {
        email,
        subscribedTo: 'Presale',
      });
      setState('SUCCESS');
      setEmail('');
      setTimeout(() => {
        setIsVisible(false);
      }, 2500);
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState('ERROR');
    }
  };

  return (
    isVisible && (
      <div className={styles.Presale}>
        <form onSubmit={(event) => subscribe(event)} className={styles.form}>
          <button
            onClick={() => setIsVisible(false)}
            className={styles.closeButton}
            type="button"
          >
            <AiOutlineClose />
          </button>
          <h3 className={styles.title}>DON&apos;T MISS THE NEWS</h3>
          <p className={styles.sectionInfo}>
            Subscribe to our newsletter and we keep you up-to-date about world
            of Dystopi
          </p>
          <div>
            <label>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="john.doe@gmail.com"
              />
            </label>
            <Button type="submit">SIGN UP</Button>
          </div>
        </form>
        {state === 'ERROR' && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}
        {state === 'SUCCESS' && (
          <p className={styles.successMessage}>Success!</p>
        )}
      </div>
    )
  );
}

export default Presale;
