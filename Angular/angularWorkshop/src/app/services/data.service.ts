
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl:string='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) { }

  getData():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }
  postData(data:[]): Observable<any> {
 
    return this.http.post<any>(this.apiUrl, data);
  }
  
  

  
      
    
  
  
}
