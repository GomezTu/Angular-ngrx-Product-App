import { State } from '../state-management/state';
import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from './actions';
import { Product } from '../models/product';

export const productReducer = ( state: Product[] = [], { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT:
            break;
        case DELETE_PRODUCT:
            break;
        case UPDATE_PRODUCT:
            break;
        default:
            return state;
    }
};
