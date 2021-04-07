import React, { Component, Fragment } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

import ordersApi from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        ordersApi.get('/ingredients.json')
            .then(response => this.setState({ ingredients: response.data }))
            .catch(_ => this.setState({ error: true }));
    }

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
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Brands',
                address: {
                    street: 'Rua dos bobos',
                    zipCode: '32000-000',
                    country: 'New Zealand'
                },
                email: 'myemail@burger.app'
            },
            deliveryMethod: 'fastest'
        };
        ordersApi.post('/orders.json', order)
            .then(_ => {
                this.setState({ loading: false, purchasing: false, });
            })
            .catch(_ => {
                this.setState({ loading: false, purchasing: false });
            });
    };

    render() {
        const disabledInfo = this.getDisabledInfo();

        const orderSummary = !!this.state.ingredients
            ? (
                <OrderSummary
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler} />
            )
            : null;
        const modalContent = this.state.loading ? <Spinner /> : orderSummary;

        const burgerBuilder = !!this.state.ingredients
            ? <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Fragment>
            : <Spinner />;

        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {modalContent}
                </Modal>

                {!this.state.error ? burgerBuilder : <p>Ingredients can't be loaded.</p>}
            </Fragment>
        );
    }

    getDisabledInfo() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return disabledInfo;
    }
}

export default withErrorHandler(BurgerBuilder, ordersApi);
