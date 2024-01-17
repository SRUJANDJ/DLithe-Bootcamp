import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empdetail',
  template:`
 
  <h2>Employees Detail</h2>
  <h2>{{errorMsg}}</h2>
  <ul *ngFor="let detail of employees">
  <li [style.marginLeft]="'20px'">{{detail.name| titlecase}} is {{detail.age}} year old</li>
  </ul>
  
  `,
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {
  public employees:any=[];
  public errorMsg:any;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe({
      next: data =>this.employees = data,
      error: error => this.errorMsg = error
    });
    
  }

}
