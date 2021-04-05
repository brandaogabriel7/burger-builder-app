import React from 'react';
import styles from './buildcontrols.module.css';

import BuildControl from './BuildControl/BuildControl';

import PropTypes from 'prop-types';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls = ({ ingredientAdded, ingredientRemoved, disabled, price, purchasable, ordered }) => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>R$ {price.toFixed(2)}</strong></p>
        {controls.map(c => (
            <BuildControl
                key={c.label}
                label={c.label}
                added={() => ingredientAdded(c.type)}
                removed={() => ingredientRemoved(c.type)}
                disabled={disabled[c.type]} />
        ))}
        <button onClick={ordered} className={styles.OrderButton} disabled={!purchasable}>ORDER NOW</button>
    </div>
);

BuildControls.propTypes = {
    ingredientAdded: PropTypes.func,
    ingredientRemoved: PropTypes.func,
    disabled: PropTypes.object,
    price: PropTypes.number.isRequired,
    purchasable: PropTypes.bool,
    ordered: PropTypes.func
};

export default BuildControls;