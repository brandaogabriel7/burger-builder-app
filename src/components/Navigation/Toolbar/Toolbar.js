import React from 'react';
import Logo from '../../Logo/Logo';
import styles from './toolbar.module.css';

const Toolbar = () => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>...</nav>
    </header>
);

export default Toolbar;