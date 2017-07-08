import { State } from '../state-management/state';
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE, CREATE_EMPLOYEE } from './actions';
import { Employee } from '../models/employee';

export const employeeReducer = (state: Employee[] = [], { type, payload } ) => {
    switch (type) {
        case ADD_EMPLOYEE:
            return payload;
        case DELETE_EMPLOYEE:
            return state.filter(item => {
                return item.id !== payload.id;
            });
        case UPDATE_EMPLOYEE:
            return state.map(item => {
                return item.id === payload.id ? Object.assign({}, item, payload) : item;
            });
        case CREATE_EMPLOYEE:
            return [...state, payload];
        default:
            return state;
    }
};
