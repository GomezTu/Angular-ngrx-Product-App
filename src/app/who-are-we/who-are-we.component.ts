import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../shared/services/employee.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-who-are-we',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.scss']
})
export class WhoAreWeComponent implements OnInit {
  employess: Observable<Employee[]>;

  constructor(
    private service: EmployeeService
  ) {
    this.employess = service.employees;
  }

  ngOnInit() {
    this.service.loadEmployees();
  }

}
