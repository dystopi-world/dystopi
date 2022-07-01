import { useState } from 'react';
import PresaleContext from './presale-context';

function PresaleWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <PresaleContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </PresaleContext.Provider>
  );
}

export default PresaleWrapper;
