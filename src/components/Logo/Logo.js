import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './logo.module.css';

const Logo = () => (
    <div className={styles.Logo}>
        <img src={burgerLogo} alt="Burger Builder App Logo" />
    </div>
);

export default Logo;