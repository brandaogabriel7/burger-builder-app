import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './sidedrawer.module.css';

const SideDrawer = () => {
    return (
        <div className={styles.SideDrawer}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default SideDrawer;