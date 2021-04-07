import React from 'react';
import styles from './buildcontrols.module.css';

import BuildControl from './BuildControl/BuildControl';

import PropTypes from 'prop-types';

const BuildControls = ({
    ingredients = {},
    ingredientAdded,
    ingredientRemoved,
    disabled,
    price,
    purchasable,
    ordered
}) => {
    const controls = Object.keys(ingredients);
    return (
        <div className={styles.BuildControls}>
            <p>Current Price: <strong>R$ {price.toFixed(2)}</strong></p>
            {controls.map(c => (
                <BuildControl
                    key={c}
                    label={c}
                    added={() => ingredientAdded(c)}
                    removed={() => ingredientRemoved(c)}
                    disabled={disabled[c]} />
            ))}
            <button onClick={ordered} className={styles.OrderButton} disabled={!purchasable}>ORDER NOW</button>
        </div>
    );
};

BuildControls.propTypes = {
    ingredients: PropTypes.object,
    ingredientAdded: PropTypes.func,
    ingredientRemoved: PropTypes.func,
    disabled: PropTypes.object,
    price: PropTypes.number.isRequired,
    purchasable: PropTypes.bool,
    ordered: PropTypes.func
};

export default BuildControls;