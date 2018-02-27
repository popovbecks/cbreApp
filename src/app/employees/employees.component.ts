import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { EmployeeService } from "./shared/employee.service";



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  isVisible: Boolean;
  isAddUser: Boolean = true;

  constructor(private employeeService: EmployeeService) { }
  addUser(){

    this.isVisible = true;
    this.isAddUser = false;

  }
  onVisibleSubmit () {
    this.isVisible = false;
    this.isAddUser = true;
  }
  onNameChange (model: any) {
    console.log(model);
    model ? this.onVisibleSubmit () : this.addUser();

  }




  ngOnInit() {
  }

}
