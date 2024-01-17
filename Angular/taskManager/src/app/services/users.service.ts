import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userEmail:any;
  constructor() { }
  setUserEmail(email: string) {
    this.userEmail = email;
  }

  getUserEmail(): string {
    return this.userEmail;
  }
}
