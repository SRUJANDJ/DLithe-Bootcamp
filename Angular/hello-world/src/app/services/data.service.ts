import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string="http://localhost:3000/users"
  constructor(private http:HttpClient) {
    
   }

  getData():Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }

  postData(data):Observable<any[]>{
    return this.http.post<any[]>(this.url,data)
  }
  

   
}
