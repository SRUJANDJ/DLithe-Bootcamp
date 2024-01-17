import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

import { FormBuilder,FormGroup,Validators,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myLoginForm:FormGroup;
  users:any;
  url='http://localhost:3000/users'
  userEmail:any;
  message:any;

  constructor(private fb:FormBuilder,private ds:DataService,
    private router:Router,private userService:UsersService) {
    this.myLoginForm=this.fb.group({
      email:['',Validators.email],
      password:['',Validators.required]
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
      if(this.myLoginForm.value['email']==user.email){
        userExist=true
        if(this.myLoginForm.value['password']==user.password){
          this.userService.setUserEmail(this.myLoginForm.value['email']);
          this.router.navigateByUrl('tasklist')
        }
        this.message="Wrong Password"
          break
        }
      }
      if(!userExist){
        console.log("User don't exist");
        
        this.router.navigateByUrl('signup')
      }
    }
    

      
    
  }


