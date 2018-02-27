import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
sum: number;
hours: number;
nights: number;
salaryByHour: number;
workDays: number;
holidaysDays: number;
allSalary: number;
bonus: number;
salaryByNights: number;
salaryByFood: number;
salaryByHolidays: number;
sumWithTax: number;
  constructor() { }

  ngOnInit() {
    this.resetForm();
  }
  calc(){
    if (this.hours || this.nights || this.salaryByHour !== 0){
      this.allSalary = this.hours * this.salaryByHour;
      this.bonus = this.allSalary * 0.05;
      this.salaryByNights = this.nights * 0.2 * this.salaryByHour;
      this.salaryByFood = this.workDays * 35;
      this.salaryByHolidays = this.holidaysDays * this.salaryByHour;
      this.sum = this.allSalary + this.bonus + this.salaryByNights + this.salaryByFood + this.salaryByHolidays;
      this.sumWithTax = this.sum * 0.805;
    }else {
      return;
    }

  }
  resetForm() {
    this.sum = 0;
    this.hours = 0;
    this.nights = 0;
    this.salaryByHour=0;
    this.workDays = 0;
    this.holidaysDays = 0;
    this.allSalary = 0;
    this.bonus = 0;
    this.salaryByNights = 0;
    this.salaryByFood = 0;
    this.salaryByHolidays = 0;
    this.sumWithTax = 0;
  }

}
