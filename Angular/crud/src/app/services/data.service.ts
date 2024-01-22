import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  isLogged=false
  userEmail:any;
  userId:any;
  display=false

  constructor(private http:HttpClient) { }  

  getData(url:any):Observable<any>{
    
    return this.http.get<any>(url);
  }
  
  postData(url:any,data:any){
    return  this.http.post(url,data);
   
  }
  getDetails(email:string,id:string){

    this.userEmail=email;
    this.userId=id
    console.log('got email');
  }

  putData(url:any,data:any){
    return this.http.post(url,data);
  }

  receivedDetails():any{
    console.log('sent');
    
    return [this.userEmail,this.userId]
    
    
  }
  deleteContent(url:any){
    return this.http.delete(url)
  }

  buttonControl(){
    this.display=true
  }

  buttonStatus(){
    return this.display
  }


  loginFromForm(){
    this.isLogged=true
  }

  isLoggedIn():boolean{
    return this.isLogged
  }
  
}