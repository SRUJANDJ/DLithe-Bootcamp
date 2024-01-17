import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
   
  constructor(private router:Router,private auth:AuthService,private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((response)=>{
      console.log("response",response)
      
    })
    
    /* if(!this.auth.isLoggedIn()){
      alert("No access")
      this.router.navigateByUrl('/form')
    } */
  }
  form(){
    this.router.navigateByUrl('/form')
  }
}
