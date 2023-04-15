import React from 'react'
import styles from './InputControl.module'


function InputControl(label, ...props) {
  return (
    <div className={styles.container}>
      {label && <label>{props.label}</label>}
      <input type='text' {...props} />
    </div>
  );
}

export default InputControl