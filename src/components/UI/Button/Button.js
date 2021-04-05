import React from 'react';
import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, clicked, type }) => (
    <button
        onClick={clicked}
        className={[styles.Button, styles[type]].join(' ')}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.any,
    clicked: PropTypes.func,
    type: PropTypes.oneOf(['Success', 'Danger'])
};

export default Button;