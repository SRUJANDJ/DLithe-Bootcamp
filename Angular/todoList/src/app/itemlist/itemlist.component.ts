import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  public name="srujan";
  public itemlist=["PIPES","SERVICES","HTTP","ROUTING"];
  public todoData="";

  constructor() { }

  ngOnInit(): void {
  }
  addData(data:string){

    if(!this.itemlist.includes(data.toUpperCase()))
      this.itemlist.push(data.toUpperCase())
    this.todoData="";
    
  }

  removeOperation(index:any){
    this.itemlist.splice(index,1)
  }
  
}
