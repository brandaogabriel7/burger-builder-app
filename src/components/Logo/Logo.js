import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './logo.module.css';

const Logo = ({ height }) => (
    <div className={styles.Logo} style={{ height }}>
        <img src={burgerLogo} alt="Burger Builder App Logo" />
    </div>
);

export default Logo;