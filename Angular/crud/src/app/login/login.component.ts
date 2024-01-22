import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControlName,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myUrl='http://localhost:3000/users';
  usersData:any;

   // form is of type reactive-forms
   myForm!:FormGroup;


  constructor(private fb:FormBuilder,private router:Router,private dataService:DataService) {
    this.myForm=this.fb.group({
      email:['',Validators.email],
      password:['',Validators.required]
    })
}

  ngOnInit(): void {
    this.dataService.getData(this.myUrl).subscribe((response)=>{
        this.usersData=response;
        console.log(this.usersData);
        
    })
  }

  onSubmit(){
    let user:Boolean=false;
    console.log(this.myForm.value);
    for(let data of this.usersData){
      if(data.email===this.myForm.value['email']){
        user=true;
        if(data.password === this.myForm.value['password']){
          this.dataService.getDetails(this.myForm.value['email'],data.id)
          console.log("successfully logged in");
          this.dataService.loginFromForm()
          if(this.myForm.value['email']==='admin@gmail.com')
            this.router.navigateByUrl('/admin');
          else  
          this.router.navigateByUrl('/userpage');
        }
        else{
          console.log("Wrong password");
        }
      }
    }
    if(!user){
      console.log("user doesn't exist");
      this.router.navigateByUrl('/signup');
  
    }
  }
  

}