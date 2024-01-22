import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  myUrl='http://localhost:3000/users';
  myDetailsUrl='http://localhost:3000/details'
  usersData:any;
  viewUserDetails:any;

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    this.dataService.getData(this.myUrl).subscribe((response)=>{
      this.usersData = response.filter((user: any) => user.email !== 'admin@gmail.com');
      console.log(this.usersData);
      
  })
  }

  viewUser(email:string,id:string){
    this.dataService.getDetails(email,id);
    this.router.navigateByUrl('userpage')
    this.dataService.buttonControl()
  
}
viewDetails(email:string,id:string){
  this.dataService.getDetails(email,id);
  this.router.navigateByUrl('personaldetails')
  this.dataService.buttonControl()
}
logout(){
  this.router.navigateByUrl('login')
}

}
