import React, { Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './modal.module.css';

const Modal = ({ children, show, modalClosed }) => (
    <Fragment>
        <div
            className={styles.Modal}
            style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}>
            {children}
        </div>
        <Backdrop show={show} clicked={modalClosed} />
    </Fragment>
);

export default Modal;