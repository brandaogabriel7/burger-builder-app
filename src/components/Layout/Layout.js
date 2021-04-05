import React, { Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './layout.module.css';

const Layout = ({ children }) => (
    <Fragment>
        <Toolbar />
        <main className={styles.Content}>{children}</main>
    </Fragment>
);

export default Layout;
