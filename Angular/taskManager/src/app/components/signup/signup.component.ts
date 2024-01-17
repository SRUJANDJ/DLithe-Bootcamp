import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  mySignUpForm:FormGroup
  users:any;
  url='http://localhost:3000/users'
  message:any;
  userDetail={
    firstName:"",lastName:"",email:"",password:"",gender:"",dob:""
  }
  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { 
    this.mySignUpForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:[''],
      email:['',Validators.email],
      password:['',Validators.required],
      gender:['',Validators.required],
      dob:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.ds.getData(this.url).subscribe((response)=>{
      this.users=response
    })
  }
  onSubmit(){
    let userExist=false
    for(let user of this.users){
      if(this.mySignUpForm.value['email']==user.email){
        this.message="User exists"
        userExist=true
        break
      }
    }
    if(!userExist){
      this.ds.postData(this.url,this.mySignUpForm.value).subscribe((response)=>{
        this.redirectLogin()
        
      })
    }
    
    console.log("added");
    
  }

  redirectLogin(){
    this.router.navigateByUrl('login')
  }
}
