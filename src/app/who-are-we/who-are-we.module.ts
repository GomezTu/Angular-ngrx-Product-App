import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoAreWeRoutingModule } from './who-are-we-routing.module';
import { WhoAreWeComponent } from './who-are-we.component';
import { EmployeeListComponent } from '../shared/components/employee-list/employee-list.component';


@NgModule({
  imports: [
    CommonModule,
    WhoAreWeRoutingModule
  ],
  declarations: [
    WhoAreWeComponent,
    EmployeeListComponent
    ]
})
export class WhoAreWeModule { }
