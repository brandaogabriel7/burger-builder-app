import React from 'react';
import styles from './buildcontrol.module.css';

const BuildControl = ({ label, added, removed }) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{label}</div>
        <button className={styles.Less} onClick={removed}>Less</button>
        <button className={styles.More} onClick={added}>More</button>
    </div>
);

export default BuildControl;