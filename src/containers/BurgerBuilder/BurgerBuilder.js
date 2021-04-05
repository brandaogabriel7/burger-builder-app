import React, { Component, Fragment } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    isPurchasable = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(key => ingredients[key])
            .reduce((prev, curr) => prev + curr, 0);

        return sum > 0;
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const ingredients = { ...this.state.ingredients };
        ingredients[type] = oldCount + 1;

        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICES[type];
        const totalPrice = oldPrice + priceAddition;

        const purchasable = this.isPurchasable(ingredients);
        this.setState({ ingredients, totalPrice, purchasable });
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) return;

        const ingredients = { ...this.state.ingredients };
        ingredients[type] = oldCount - 1;

        const oldPrice = this.state.totalPrice;
        const priceDeduction = INGREDIENT_PRICES[type];
        const totalPrice = oldPrice - priceDeduction;

        const purchasable = this.isPurchasable(ingredients);
        this.setState({ ingredients, totalPrice, purchasable });
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = () => {
        alert('continue');
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    price={this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Fragment>
        );
    }
}

export default BurgerBuilder;
