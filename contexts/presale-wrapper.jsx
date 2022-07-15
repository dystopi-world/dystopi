import { useState } from 'react';
import PresaleContext from './presale-context';

function PresaleWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [temporaryModalIsVisible, setTemporaryModalIsVisible] = useState(false);
  const [temporaryModalLoadedOnce, setTemporaryModalLoadedOnce] =
    useState(false);

  return (
    <PresaleContext.Provider
      value={{
        isVisible,
        setIsVisible,
        temporaryModalIsVisible,
        setTemporaryModalIsVisible,
        temporaryModalLoadedOnce,
        setTemporaryModalLoadedOnce,
      }}
    >
      {children}
    </PresaleContext.Provider>
  );
}

export default PresaleWrapper;
