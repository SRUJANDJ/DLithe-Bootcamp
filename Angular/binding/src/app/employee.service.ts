/* import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url:string="/assets/data/employees.json"
  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee>{
    return this.http.get<IEmployee>(this._url)
      .catch(this.errorHandler);
  }
  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
    
  }
}
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
      .pipe(
        catchError((error: HttpErrorResponse) => this.errorHandler(error))
      );
  }

  errorHandler(error: HttpErrorResponse): Observable<never> {
    return throwError(()=>error.message);
  }
}
