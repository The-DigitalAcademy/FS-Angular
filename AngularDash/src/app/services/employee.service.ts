import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Interface/employee-interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;

  employeeList: Employee[] = [];

  constructor(private http: HttpClient) { }

  getEmployees(): Employee[] {
    return this.employeeList;
  }

  getEmployee(id: string)
  {
    let employee: Employee;
    this.employeeList.map(val=>{
      if(val.id == id) employee = val;
    });
    return this['employee'];
  }

  employeeEdit(updatedEmployee: Employee): boolean {
    const index = this.employeeList.findIndex(val => val.id === updatedEmployee.id);
    if (index !== -1) {
      this.employeeList[index] = updatedEmployee;
      return true;
    }
    return false;
  }
}
