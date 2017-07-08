import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state-management/state';
import { Employee } from '../../models/employee';
import { Observable } from 'rxjs/Observable';
import { _EMPLOYEES } from '../../shared/mocks/employee-mocks';
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE, CREATE_EMPLOYEE } from '../../state-management/actions';

@Injectable()
export class EmployeeService {
  employees: Observable<Employee[]>;
  constructor(
    private store: Store<State>
  ) {
    this.employees = store.select('employees');
  }

  loadEmployees(){
    this.store.dispatch({ type: ADD_EMPLOYEE, payload: _EMPLOYEES });
  }

}
