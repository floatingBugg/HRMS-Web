import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PersonalDetailsService {
  constructor(private http: HttpClient) {}
  _userId = localStorage.getItem('loggedIn_UserId');
  _userName = localStorage.getItem('loggedIn_UserName');
  _responseMessage:any=""
  get responseMessage(){
    return this._responseMessage;
  }
  personalDetails(data: any): Observable<any> {
    return this.http.post(
      'https://localhost:44324/Employee/AddEmployee',
      data
    );
  }
  getEmployeeData() {
    let url =
      'https://localhost:44324/Employee/DisplayAllEmployees';
    return this.http.get(url);
  }
  deleteEmployeeData(id: any) {
    return this.http.delete(
      `https://localhost:44324/Employee/DeleteEmployee?id=${id}`
    );
  }
  viewEmployeeData(id: any): Observable<any> {
    return this.http.get(
      `https://localhost:44324/Employee/GetEmployeebyID?id=${id}`
    );
  }

  updateEmployeeData(data:any):Observable<any>{
    return this.http.post(
      'https://localhost:44324/Employee/UpdateEmployee',
      data
    );
  }
}


