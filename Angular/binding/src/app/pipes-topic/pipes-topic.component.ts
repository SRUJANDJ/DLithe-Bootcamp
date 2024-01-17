import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-topic',
  template:`
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase }}</h2>
  <h2>{{name | titlecase}}</h2>
  <h2>{{name | slice:4:10}}</h2>
  <h2>{{details | json}}</h2>
  <h2>{{date | date:'medium'}}</h2>
  

  <h2>{{1.9999 |number:'1.2-3'}}</h2>
  
  `,
  styles: [``]
})
export class PipesTopicComponent implements OnInit {
  public date=new Date();
  public name="srujan how are you";
  public details={
    username:"srujan",
    age:22
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
