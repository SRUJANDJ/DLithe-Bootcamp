import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private dataService:DataService,private router:Router) { }
  canActivate():boolean{
    if(this.dataService.isLoggedIn()){
      return true
    }
    else{
      alert("No access")
      this.router.navigateByUrl('login')
      return false
    }
  }
  
}
