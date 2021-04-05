import React from 'react';

import styles from './drawertoggle.module.css';

import PropTypes from 'prop-types';

const DrawerToggle = ({ clicked }) => (
    <div className={styles.DrawerToggle} onClick={clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

DrawerToggle.propTypes = {
    clicked: PropTypes.func
};

export default DrawerToggle;