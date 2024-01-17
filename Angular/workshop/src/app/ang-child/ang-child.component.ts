import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ang-child',
  templateUrl: './ang-child.component.html',
  styleUrls: ['./ang-child.component.css']
})
export class AngChildComponent implements OnInit {
  public items=[{name:"mobile",price:25000},
          {name:"shoes",price:3500},
          {name:"laptop",price:75000}]
  @Input() parentData:any;
  @Output() childData= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  buying(data:any){
    this.childData.emit(data)
    
  }

}
