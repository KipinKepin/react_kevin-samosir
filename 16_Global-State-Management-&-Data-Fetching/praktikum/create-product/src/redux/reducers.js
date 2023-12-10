// reducers.js
import { combineReducers } from 'redux';

const initialState = {
    products: [
        {
            id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
            productName: "John",
            productCategory: "Doe",
            productFreshness: "Doe",
            productPrice: "Doe",
            image: "Doe",
            additionalDescription: "Doe",
        },
    ],
};

const productsReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload];
        case 'UPDATE_PRODUCT':
            return state.map((product) =>
                product.id === action.payload.id ? action.payload : product
            );
        case 'DELETE_PRODUCT':
            return state.filter((product) => product.id !== action.payload);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    products: productsReducer,
});

export default rootReducer;
