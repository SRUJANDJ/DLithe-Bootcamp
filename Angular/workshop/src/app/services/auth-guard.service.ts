import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth:AuthService,private router:Router) { }
  canActivate():boolean{
    if(this.auth.isLoggedIn()){
      return true
    }
    else{
      alert("No access")
      this.router.navigateByUrl('/form')
      return false
    }
  }

}
