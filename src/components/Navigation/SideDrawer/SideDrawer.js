import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './sidedrawer.module.css';

import PropTypes from 'prop-types';

const SideDrawer = ({ show, closed }) => {
    const sideDrawerClasses = [styles.SideDrawer];
    sideDrawerClasses.push(show ? styles.Open : styles.Closed);
    return (
        <Fragment>
            <Backdrop show={show} clicked={closed} />
            <div className={sideDrawerClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    );
};

SideDrawer.propTypes = {
    show: PropTypes.bool,
    clicked: PropTypes.func
};

export default SideDrawer;