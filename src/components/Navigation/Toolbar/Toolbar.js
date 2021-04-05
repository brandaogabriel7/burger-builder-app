import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import styles from './toolbar.module.css';

import PropTypes from 'prop-types';

const Toolbar = ({ drawerToggleClicked }) => (
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={drawerToggleClicked} />
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

Toolbar.propTypes = {
    drawerToggleClicked: PropTypes.func
};

export default Toolbar;