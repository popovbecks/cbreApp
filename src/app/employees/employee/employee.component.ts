import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from "../shared/employee.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']

})
export class EmployeeComponent implements OnInit {

  constructor(private employeecompService: EmployeeService, private tostr: ToastrService) { }
  @Output () isEmployeeFormChange = new EventEmitter<boolean>();
  onNameChange(model: boolean){
    this.isEmployeeFormChange.emit(model);
  }

  ngOnInit() {

    this.resetForm();

  }
  getService() {
    return this.employeecompService;

  }
  onSubmit(employeeForm: NgForm){
    if(employeeForm.value.$key == null){
      this.employeecompService.insertEmployee(employeeForm.value);
      this.tostr.success('Успешно добавлен', 'Employee Register');
      this.onNameChange(true);
    }else {
      this.employeecompService.updateEmployee(employeeForm.value);
      this.resetForm(employeeForm);
      this.tostr.success('Успешно изменен', 'Employee Register');
      this.onNameChange(true);
    }

  }
  resetForm(employeeForm?: NgForm) {
    if(employeeForm != null)
    employeeForm.reset();
    this.employeecompService.selectEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary:380,
      adress: '',
      education: '',
      familyState: ''
    }
  }
}
