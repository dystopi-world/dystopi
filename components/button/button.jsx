import React from 'react';
import styles from './button.module.scss';

function Button({ children, style = {} }) {
  return (
    <button style={style} className={styles.Button}>
      {children}
    </button>
  );
}

export default Button;
