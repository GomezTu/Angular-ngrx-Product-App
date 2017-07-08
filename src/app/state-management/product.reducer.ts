import { State } from '../state-management/state';
import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, CREATE_PRODUCT } from './actions';
import { Product } from '../models/product';

export const productReducer = ( state: Product[] = [], { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT:
            return payload;
        case DELETE_PRODUCT:
            return state.filter(item => {
                return item.id !== payload.id;
            });
        case UPDATE_PRODUCT:
            return state.map(item => {
                return item.id === payload.id ? Object.assign({}, item, payload) : item;
            });
        case CREATE_PRODUCT:
            return [...state, payload];
        default:
            return state;
    }
};
