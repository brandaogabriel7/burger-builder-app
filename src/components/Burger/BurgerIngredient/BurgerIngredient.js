import React, { Fragment } from 'react';
import styles from './burgeringredient.module.css';
import PropTypes from 'prop-types';

const ingredientTypes = {
    'bread-bottom': styles.BreadBottom,
    'bread-top': styles.BreadTop,
    meat: styles.Meat,
    cheese: styles.Cheese,
    salad: styles.Salad,
    bacon: styles.Bacon
};

const BurgerIngredient = ({ type }) => {
    if (!!type) {
        return (
            <div className={ingredientTypes[type]}>
                {type === 'bread-top' ? (
                    <Fragment>
                        <div className={styles.Seeds1}></div>
                        <div className={styles.Seeds2}></div>
                    </Fragment>
                ) : null}
            </div>
        );
    }
    throw new Error('There is no such ingredient');
};

BurgerIngredient.propTypes = {
    type: PropTypes.oneOf(Object.keys(ingredientTypes)).isRequired
};

export default BurgerIngredient;
