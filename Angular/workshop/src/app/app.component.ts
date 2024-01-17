import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular workshop';
  productName="laptop";
  
  receivedData(data:any){
    alert(`${data} purchased`)
  }
  /* public color="red";
  public cmd="STOP";

  changeColor(){
    if(this.color=="red"){
      this.color="yellow"
      this.cmd="READY"
    }
    else if(this.color=="yellow"){ 
      this.color="rgb(46, 244, 46)"
      this.cmd="GO"
    }
    else {
      this.color="red"
      this.cmd="STOP"
    }
  } */
}
