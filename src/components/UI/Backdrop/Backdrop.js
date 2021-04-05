import React from 'react';
import styles from './backdrop.module.css';

const Backdrop = ({ show, clicked }) => (
    show ? <div onClick={clicked} className={styles.Backdrop}></div> : null
);

export default Backdrop;