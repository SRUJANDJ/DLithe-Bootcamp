import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  url='http://localhost:3000/tasks'
  tasks:any;
  singleUserLists:any;
  userEmail:any;
  public data="";
  constructor(private router:Router,private ds:DataService,private userService:UsersService) { }

  ngOnInit(): void {
    this.userEmail = this.userService.getUserEmail();
    this.ds.getData(this.url).subscribe((response)=>{
      this.tasks=response
      for(let i of this.tasks){
        if(i.email===this.userEmail){
          this.singleUserLists=i.tasklist
          break
        }
      }
      
  })
}
  

  removeOperation(index:any){
    this.tasks[0].tasklist.splice(index,1)
  }


}
