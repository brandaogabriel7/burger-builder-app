import React from 'react';

import styles from './drawertoggle.module.css';

const DrawerToggle = ({ clicked }) => (
    <div className={styles.DrawerToggle} onClick={clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;