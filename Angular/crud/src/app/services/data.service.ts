import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  userEmail:any;

  

  constructor(private http:HttpClient) { }

  /* getData(url:any):Observable<any>{
    
    return this.http.get<any>(url);
  } */
  getData(url: any): Observable<any> {
    return this.http.get<any>(url)
      .pipe(
        map((response:any) => response ? response[0] : null), // Check if response is defined
        catchError(error => {
          console.error('Error fetching data:', error);
          return throwError((error:any)=>{
            error
          });
        })
      );
  }
  

  postData(url:any,data:any){
    return  this.http.post(url,data);
   

  }
  getDetails(email:any){

    this.userEmail=email;
    console.log('got email');
    
 
    
  }

  receivedDetails(){
    console.log('sent');
    
    return this.userEmail;
    
    
  }
}