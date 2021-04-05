import React, { Fragment } from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './layout.module.css';

const Layout = ({ children }) => (
    <Fragment>
        <Toolbar />
        <SideDrawer />
        <main className={styles.Content}>{children}</main>
    </Fragment>
);

export default Layout;
