import React from 'react';
import styles from './backdrop.module.css';

import PropTypes from 'prop-types';

const Backdrop = ({ show, clicked }) => (
    show ? <div onClick={clicked} className={styles.Backdrop}></div> : null
);

Backdrop.propTypes = {
    show: PropTypes.bool,
    clicked: PropTypes.func
};

export default Backdrop;