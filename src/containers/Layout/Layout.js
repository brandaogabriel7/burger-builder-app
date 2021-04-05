import React, { Component, Fragment } from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styles from './layout.module.css';

import PropTypes from 'prop-types';

class Layout extends Component {
    static propTypes = {
        children: PropTypes.any
    };

    state = {
        showSideDrawer: false
    };

    sideDrawerToggledHandler = () => {
        this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
    };

    render() {
        return (
            <Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerToggledHandler} />
                <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerToggledHandler} />
                <main className={styles.Content}>{this.props.children}</main>
            </Fragment>
        );
    }

}

export default Layout;
