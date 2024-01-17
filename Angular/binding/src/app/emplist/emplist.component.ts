import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-emplist',
  template:`
 
  <h2>Employees list</h2>
  <h2>{{errorMsg}}</h2>
  <ul *ngFor="let detail of employees">
  <li [style.marginLeft]="'20px'">{{detail.name| titlecase}} </li>
  </ul>
  
  `,
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  public employees:any=[];
  public errorMsg:any;
  

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data=>this.employees=data,
                    error=>this.errorMsg=error);
    console.log(this.employees);
    
  }

}
