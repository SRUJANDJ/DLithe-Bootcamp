import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder,FormControlName,UntypedFormGroup,Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myUrl='http://localhost:3000/users'
  myUrlDetails='http://localhost:3000/details'
  myUserDetails={
    email:'',
    list:[]
  };

  public usersData:any;

  /* myObj={
    firstName: '',
    lastName: '',
    email: 'var@gmail.com',
    gender: '',
    dob: '',
    password: 'var123'
  } */
  
  // form is of type reactive-forms
  myForm!:UntypedFormGroup;

  // form initialization and giving validations
  constructor(private fb:UntypedFormBuilder,private router:Router,private dataService:DataService) { 
    this.myForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.email],
      gender:['',Validators.required],
      dob:['',Validators.required],
      password:['',[Validators.minLength(5),Validators.required]]

    })
  }

  ngOnInit(): void {
    this.dataService.getData(this.myUrl).subscribe((response)=>{
        this.usersData=response;
        console.log(this.usersData);
        
    })
  }

  onSubmit(){
    let user=false;
    for(let data of this.usersData){
      if(data.email === this.myForm.value['email']){
        user=true;
        break;
      }
    }
    if(!user){
      this.dataService.postData(this.myUrl,this.myForm.value).subscribe();
      this.myUserDetails.email=this.myForm.value['email'];
      this.dataService.postData(this.myUrlDetails,this.myUserDetails).subscribe();
      alert("Record Added Successfully");

    }

    this.router.navigateByUrl('/login');
 
    
  }
  loadLogin(){
    this.router.navigateByUrl('login')
  }

}