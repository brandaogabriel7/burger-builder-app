import React from 'react';
import styles from './modal.module.css';

const Modal = ({ children, show }) => (
    <div
        className={styles.Modal}
        style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
        }}>
        {children}
    </div>
);

export default Modal;