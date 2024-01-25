import { Component, OnInit ,OnChanges, SimpleChanges} from '@angular/core';
import { DataService } from '../services/data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  clicked=false
  assign='';
  updatingItem='';
  myObject:any={
    email:"",
    list:[]
  };
  id:any;
  email:any;
  userId:any;
  display=false
  displayIndex:any;
  buttonStatus:any;

  myUrl='http://localhost:3000/details';
  myUserUrl='http://localhost:3000/users'

  userDetails:any={};

  constructor(private dataService:DataService ,private router:Router) { }

  

  ngOnInit(): void {
    var dataReceived=this.dataService.receivedDetails();
    this.email=dataReceived[0]
    this.userId=dataReceived[1]
    this.dataService.getData(`${this.myUrl}?email=${this.email}`).subscribe((response)=>{
      this.userDetails=response;

    this.buttonStatus=this.dataService.buttonStatus()

      
  })
  
  }
  onClick(){
    if(this.assign){
      this.userDetails[0].list.push(this.assign);
    this.assign="";
    this.myObject.email=this.userDetails[0].email;
    this.myObject.list=this.userDetails[0].list;
    this.id=this.userDetails[0].id
    this.dataService.putData(`${this.myUrl}?email=${this.userDetails[0].email}`,this.myObject).subscribe();
        this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
      () => {
        console.log('Data deleted successfully.');
        this.loading()
        

      }
    );
    }
}
  loading(){
    var dataReceived=this.dataService.receivedDetails();
    this.email=dataReceived[0]
    this.userId=dataReceived[1]
    console.log("this is my emial man");
    
    this.dataService.getData(`${this.myUrl}?email=${this.email}`).subscribe((response)=>{
      this.userDetails=response;    
  })
  }

  deleteItem(index:number){
    this.userDetails[0].list.splice(index,1)
    this.myObject.email=this.userDetails[0].email;
    this.myObject.list=this.userDetails[0].list.slice();
    this.id=this.userDetails[0].id
    this.dataService.putData(`${this.myUrl}?email=${this.userDetails[0].email}`,this.myObject).subscribe();
        this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
      () => {
        console.log('Data deleted successfully.');
        this.loading()
        
        

      }
    );
    
  }

  updateDisplay(index:number,details:string){
    this.display=true
    this.displayIndex=index
    this.updatingItem=details

    
  }
  updateItem(){
    console.log(this.updatingItem);
    
    this.userDetails[0].list.splice(this.displayIndex,1,this.updatingItem)
    this.myObject.email=this.userDetails[0].email;
    this.myObject.list=this.userDetails[0].list.slice();
    this.id=this.userDetails[0].id
    this.dataService.putData(`${this.myUrl}?email=${this.userDetails[0].email}`,this.myObject).subscribe();
        this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
      () => {
        console.log('Data deleted successfully.');
        this.loading()
      }
    );
    this.display=false
    this.updatingItem=''
    
    
  }
  deleteAccount(){
    this.id=this.userDetails[0].id
    console.log(`${this.myUrl}/${this.id}`);
    this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
      () => {
        console.log('Data deleted successfully.');
        console.log(this.userId);
        console.log(`${this.myUrl}/${this.userId}`);

        
        
      }
    );
    console.log(`${this.myUserUrl}/${this.userId}`);
    this.dataService.deleteContent(`${this.myUserUrl}/${this.userId}`).subscribe(
      () => {
        console.log('user deleted successfully.');
      }
    );
    this.router.navigateByUrl('signup')
  }

  rollBack(){
    this.buttonStatus=false
    this.router.navigateByUrl('admin')
  }

  logout(){
    this.router.navigateByUrl('login')
  }
  loadingPersonalDetails(){
    this.router.navigateByUrl('personaldetails')
  }
  addData(){
    if(!this.clicked)
      this.clicked=true
    else
      this.clicked=false
  }
  

}