import React from 'react';

import styles from './burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import PropTypes from 'prop-types';

const Burger = ({ ingredients }) => {
    const ingredientElements = Object.keys(ingredients)
        .map((type) =>
            [...Array(ingredients[type])].map((_, i) => (
                <BurgerIngredient key={type + i} type={type} />
            ))
        )
        .reduce((prev, curr) => prev.concat(curr), []);
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientElements.length === 0
                ? 'Please start adding ingredients'
                : ingredientElements}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

Burger.propTypes = {
    ingredients: PropTypes.object
};

export default Burger;
