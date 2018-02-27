import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from "../shared/employee.service";
import { Employee } from "../shared/employee.model";
import {element} from "protractor";
import { ToastrService } from "ngx-toastr";



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];
  searchStr: String = '';
  isEmpVisible: boolean = false;
  constructor(private employeeService: EmployeeService, private tostr: ToastrService) { }

  @Output () isEmployeeListFormChange = new EventEmitter<boolean>();
  onNameChange(model: any){
    this.isEmployeeListFormChange.emit(model);
    console.log(model);
  }
  ngOnInit() {
    let x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);

      })
    })
  }
  onEdit(emp: Employee) {
    this.onNameChange(false)
      this.employeeService.selectEmployee = Object.assign({}, emp);
  }
  onDelete(key: string){
    if(confirm('Вы уверены что хотите удалить этого работника?') == true){
  this.employeeService.deleteEmployee(key);
  this.tostr.warning("Удачно удален", "Employee Register")
  }
  }

}
