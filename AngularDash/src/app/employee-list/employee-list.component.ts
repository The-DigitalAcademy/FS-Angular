import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Interface/employee-interface';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeForm: FormGroup = new FormGroup({  // Initialize the employeeForm property here
    name: new FormControl(''),
    id: new FormControl(''),
    address: new FormControl(''),
    gender: new FormControl(''),
  });

  isEdit: Boolean = false;
  msg: String = '';

  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployees();

    this.route.params.subscribe(param => {
      console.log(param);
      if (param && param['id']) {
        let employee = this.employeeService.getEmployee(param['id']);
        if (employee) {
          this.employeeForm.setValue(employee);
          this.isEdit = true;
        } else {
          this.router.navigate(['/employee']);
        }
      }
    });
  }

  resetForm() {
    console.log('reset', this.employeeForm);
    this.employeeForm.reset();
  }

  add() {
    if (this.employeeForm.valid) {
      this.employeeService.employeeList.push(this.employeeForm.value);
      this.resetForm();
      console.log('this.employeeService.studelost', this.employeeService.getEmployees());
    } else {
      this.msg = 'Please complete the form';
    }
  }

  edit() {
    this.msg = '';
    if (this.employeeForm.valid) {
      if (this.employeeService.employeeEdit(this.employeeForm.value)) {
        this.router.navigate(['/employees']);
      } else {
        this.msg = 'Something went wrong';
      }
    } else {
      this.msg = 'Please complete the form';
    }
  }
}
