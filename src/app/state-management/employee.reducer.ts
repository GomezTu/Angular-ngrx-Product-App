import { State } from '../state-management/state';
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from './actions';
import { Employee } from '../models/employee';

export const employeeReducer = (state: Employee[] = [], { type, payload } ) => {
    switch (type) {
        case ADD_EMPLOYEE:
            break;
        case DELETE_EMPLOYEE:
            break;
        case UPDATE_EMPLOYEE:
            break;
        default:
            return state;
    }
};
