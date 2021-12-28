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
  _responseMessage: any = '';
  apiUrl = 'http://hamzaashiq467-001-site1.itempurl.com';
  get responseMessage() {
    return this._responseMessage;
  }
  personalDetails(data: any): Observable<any> {
    return this.http.post(this.apiUrl + '/Employee/AddEmployee', data);
  }
  getEmployeeData() {
    let url = this.apiUrl + '/Employee/DisplayAllEmployees';
    return this.http.get(url);
  }
  deleteEmployeeData(id: any) {
    return this.http.delete(this.apiUrl + `/DeleteEmployee?id=${id}`);
  }
  viewEmployeeData(id: any): Observable<any> {
    return this.http.get(this.apiUrl + `/Employee/GetEmployeebyID?id=${id}`);
  }

  updateEmployeeData(data: any): Observable<any> {
    return this.http.post(this.apiUrl + '/Employee/UpdateEmployee', data);
  }
}
