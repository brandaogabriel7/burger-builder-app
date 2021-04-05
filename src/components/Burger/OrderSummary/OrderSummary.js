import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = ({ ingredients, price, purchaseCanceled, purchaseContinued }) => {
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
            <p><strong>Total Price: R$ {price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button type="Danger" clicked={purchaseCanceled}>CANCEL</Button>
            <Button type="Success" clicked={purchaseContinued}>CONTINUE</Button>
        </Fragment>
    );
};

export default OrderSummary;