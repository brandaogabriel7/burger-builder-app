import React from 'react';
import styles from './navigationitem.module.css';

const NavigationItem = ({ active, link, children }) => (
    <li className={styles.NavigationItem}>
        <a
            href={link}
            className={active ? styles.active : null}>{children}</a>
    </li>
);

export default NavigationItem;