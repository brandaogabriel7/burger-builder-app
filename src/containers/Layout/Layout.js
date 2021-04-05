import React, { Component, Fragment } from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styles from './layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    render() {
        return (
            <Fragment>
                <Toolbar />
                <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={styles.Content}>{this.props.children}</main>
            </Fragment>
        );
    }
}

export default Layout;
