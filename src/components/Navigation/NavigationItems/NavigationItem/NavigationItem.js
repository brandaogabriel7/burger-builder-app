import React from 'react';
import styles from './navigationitem.module.css';

import PropTypes from 'prop-types';

const NavigationItem = ({ active, link, children }) => (
    <li className={styles.NavigationItem}>
        <a
            href={link}
            className={active ? styles.active : null}>{children}</a>
    </li>
);

NavigationItem.propTypes = {
    active: PropTypes.bool,
    link: PropTypes.string,
    children: PropTypes.any
};

export default NavigationItem;