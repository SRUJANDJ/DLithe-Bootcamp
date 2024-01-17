import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-test',
  template: `
  <h2 [class]="cls_success">Welcome {{name}}</h2>
  <h2 [style.color]="checker? 'red':'green'">Welcome {{name}}</h2>
  <h2 [class]="cls_danger">Welcome {{name}}</h2>
  <h2 [class]="cls_special">Welcome {{name}}</h2>
  <h2 [class.text-danger]="checker">Welcome {{name}}</h2>
  <h2 [ngClass]="conpro">Welcome {{name}}</h2>
  <h2 [ngStyle]="colstyle">Hey {{name}}</h2>
  <button (click)="onClick()">Wanna Greet!</button>
  <input #myinp type="text" />
  <button (click)="printmesg(myinp.value)">Wanna Greet!</button>

  <input type="text" value="man" />
  <div><input type="text" [(ngModel)]="two_way" /></div>
  <h1>{{two_way}}</h1>
  `,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {
  public two_way="";
  public name="srujan DJ";
  public cls_success="text-success";
  public cls_danger="text-danger";
  public cls_special="text-special";
  public checker=false;
  public ispecial=true
  public conpro={
    "text-success":!this.checker,
    "text-danger":this.checker,
    "text-special":this.ispecial

  }
  public colstyle={
    color:"white",
    backgroundColor:"red",
    borderRadius:"10px",
    width:"200px",
    padding:"10px"
  }

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log("Hey there how are you");
    if(this.colstyle.backgroundColor=="red")
      this.colstyle.backgroundColor="black"
    else
    this.colstyle.backgroundColor="red"
    
  }
  printmesg(value:any){
    console.log(value);
    
  }

}
