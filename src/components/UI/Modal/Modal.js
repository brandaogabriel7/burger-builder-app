import React from 'react'
import styles from './modal.module.css';

const Modal = ({children}) => (
    <div className={styles.Modal}>{children}</div>
);

export default Modal;