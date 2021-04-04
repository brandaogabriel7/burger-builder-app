import React, { Fragment } from 'react';
import styles from './layout.module.css';

const Layout = ({ children }) => (
    <Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>{children}</main>
    </Fragment>
);

export default Layout;
