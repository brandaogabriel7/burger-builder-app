import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './logo.module.css';

import PropTypes from 'prop-types';

const Logo = ({ height }) => (
    <div className={styles.Logo} style={{ height }}>
        <img src={burgerLogo} alt="Burger Builder App Logo" />
    </div>
);

Logo.propTypes = {
    height: PropTypes.string
};

export default Logo;