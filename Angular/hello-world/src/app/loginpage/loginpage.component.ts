import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  myLoginForm:FormGroup
  details=[];
  rendered=false
  userDetail={
    name:"",
    password:""
}
  
  constructor(private fb:FormBuilder,private router:Router,private ds:DataService) {
    
    this.myLoginForm=this.fb.group({
      name:["",Validators.required],
      password:["",Validators.required]
    })
    }
    ngOnInit(): void {
      this.ds.getData().subscribe((response)=>{
        this.details=response
        console.log(this.details);
        
      })
    }
    onSubmit(){
      for(let detail of this.details){
        if (detail.name===this.myLoginForm.value['name'] && detail.password===this.myLoginForm.value['password']){
          this.router.navigateByUrl('/fetch')
          this.rendered=true
        }
        
        
      }
       if(!this.rendered){
        this.userDetail.name=this.myLoginForm.value['name']
        this.userDetail.password=this.myLoginForm.value['password']
        this.ds.postData(this.userDetail).subscribe((response)=>{
          console.log("inserted");
          
        })
        
        
        this.router.navigateByUrl('/login')
      }
           
      
    }
    
   }

  
  


