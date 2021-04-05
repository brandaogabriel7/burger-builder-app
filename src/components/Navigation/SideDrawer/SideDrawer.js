import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './sidedrawer.module.css';

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

export default SideDrawer;