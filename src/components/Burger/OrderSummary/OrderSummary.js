import React, { Fragment } from 'react';

const OrderSummary = ({ ingredients }) => {
    const ingredientSummary = Object.keys(ingredients).map(key => (
        <li key={key}>
            <span style={{ textTransform: 'capitalize' }}>{key}</span>: {ingredients[key]}
        </li>
    ));
    return (
        <Fragment>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Fragment>
    );
};

export default OrderSummary;