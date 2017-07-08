import { State } from '../state-management/state';
import { ADD_MESSAGE, UPDATE_MESSAGE, CREATE_MESSAGE } from './actions';
import { Message } from '../models/message';

export const messageReducer = ( state: Message[] = [], { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE:
            return payload;
        case UPDATE_MESSAGE:
            return state.map(item => {
                return item.id === payload.id ? Object.assign({}, item, payload) : item;
            });
        case CREATE_MESSAGE:
            return [...state, payload];
        default:
            return state;
    }
};
