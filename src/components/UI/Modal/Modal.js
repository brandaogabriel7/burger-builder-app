import React, { Fragment, memo } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './modal.module.css';

import PropTypes from 'prop-types';

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


Modal.propTypes = {
    children: PropTypes.any,
    show: PropTypes.bool,
    modalClosed: PropTypes.func
};

export default memo(Modal, (props, nextProps) => props.show === nextProps.show);