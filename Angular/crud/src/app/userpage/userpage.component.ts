import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  myUrl='http://localhost:3000/details';
  // http://localhost:3000/users?email=bshridhar27@gmail.com
  
  userDetails:any;

  constructor(private dataService:DataService ) { }

  ngOnInit(): void {
    let email=this.dataService.receivedDetails();
    console.log("started");
    console.log("started");
    this.dataService.getData(`${this.myUrl}?email=${email}`).subscribe((response)=>{
      this.userDetails=response;
      console.log("started");
      console.log(`${this.myUrl}?email=${email}`);
      
      

      
      console.log(this.userDetails);
      console.log(this.userDetails[0].email);
      console.log(this.userDetails[0].list);
      
  })

}
}