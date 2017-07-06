import { State } from '../state-management/state';
import { ADD_MESSAGE, UPDATE_MESSAGE } from './actions';
import { Message } from '../models/message';

export const messageReducer = ( state: Message[] = [], { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE:
            break;
        case UPDATE_MESSAGE:
            break;
        default:
            return state;
    }
};
