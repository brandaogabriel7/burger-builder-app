import React from 'react';
import styles from './buildcontrols.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls = () => (
    <div className={styles.BuildControls}>
        {controls.map(c => <BuildControl key={c.label} label={c.label} />)}
    </div>
);

export default BuildControls;