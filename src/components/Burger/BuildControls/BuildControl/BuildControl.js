import React from 'react';
import styles from './buildcontrol.module.css';
import PropTypes from 'prop-types';

const BuildControl = ({ label, added, removed, disabled }) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{label}</div>
        <button className={styles.Less} onClick={removed} disabled={disabled}>Less</button>
        <button className={styles.More} onClick={added}>More</button>
    </div>
);

BuildControl.propTypes = {
    label: PropTypes.string.isRequired,
    added: PropTypes.func,
    removed: PropTypes.func,
    disabled: PropTypes.bool
};

export default BuildControl;