import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'employees', component: EmployeesComponent },
  // {
  //   path: '',
  //   redirectTo: '/employees',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
