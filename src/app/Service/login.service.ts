import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl="http://localhost:3000/register";

  constructor(private http:HttpClient) { }


  // Registatin_Method
  postReg(obj:Employee[]):Observable<Employee[]>{
    return this.http.post<Employee[]>(this.loginUrl,obj).pipe(
      map((res)=>{
        return res;
      })
    );
  }
  // get_Registaion_Method
  getReg():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.loginUrl).pipe(
      map((res)=>{
        return res
      })
    );
  }
  // get eamil Validation
  validatorEmail(email:Employee):Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.loginUrl}?email=${email}`).pipe(
      map((res)=>{
        return res;
      })
    );
  }
  //get login_Method
  getLogin(email:Employee):Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.loginUrl}?email=${email}`).pipe(
      map((res)=>{
        return res;
      })
    );
  }
}
