import React from 'react';
import styles from './buildcontrols.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls = ({ ingredientAdded, ingredientRemoved, disabled, price }) => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>R$ {price.toFixed(2)}</strong></p>
        {controls.map(c => (
            <BuildControl
                key={c.label}
                label={c.label}
                added={() => ingredientAdded(c.type)}
                removed={() => ingredientRemoved(c.type)}
                disabled={disabled[c.type]} />))}
    </div>
);

export default BuildControls;