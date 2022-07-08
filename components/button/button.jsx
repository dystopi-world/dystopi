import React from 'react';
import styles from './button.module.scss';

function Button({ children, style = {}, onClick = null, type = 'button' }) {
  return (
    <button
      onClick={onClick}
      type={type}
      style={style}
      className={styles.Button}
    >
      {children}
    </button>
  );
}

export default Button;
