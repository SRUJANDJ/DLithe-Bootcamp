import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { FormBuilder,FormGroup,Validators,FormControlName } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm:FormGroup;
  url='https://jsonplaceholder.typicode.com/posts'
  
  constructor(private router:Router,private auth:AuthService,private fb:FormBuilder,private dataService:DataService) {}

  ngOnInit(): void {
    this.myForm=this.fb.group({
      title:['',Validators.required],
      body:['',Validators.required]
    })
}


  /* submitted(form:NgForm){
    if(form.value.body==="" || form.value.title==="")
      alert("Invalid")
    else 
      alert("Success")
  } */
  onSubmit(){
    this.dataService.postData(this.myForm.value).subscribe((response)=>{
      console.log("response",response)
    })
    this.myForm.controls['body'].setErrors
    console.log(this.myForm.controls['body']);
    
    
  }
  

  



  display(){
    this.router.navigateByUrl('/display')
  }
}
