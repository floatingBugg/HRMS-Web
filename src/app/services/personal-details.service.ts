import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PersonalDetailsService {
  constructor(private http: HttpClient) {}
  userID = localStorage.getItem('loggedIn_UserId');
  userName = localStorage.getItem('loggedIn_UserName');

  personalDetails(data: any): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
    });

    httpHeaders = httpHeaders.set('userID', 'this.userID');
    httpHeaders = httpHeaders.set('userName', 'this.userName');

    return this.http.post(
      'http://hamzaashiq467-001-site1.itempurl.com/Employee/Add',
      data,
      { headers: httpHeaders }
    );
  }
  getEmployeeData() {
    let url =
      'http://hamzaashiq467-001-site1.itempurl.com/Employee/DisplayAllEmployees';
    return this.http.get(url);
  }
  deleteEmployeeData(id: any) {
    return this.http.delete(
      `http://hamzaashiq467-001-site1.itempurl.com/Employee/Remove?id=${id}`
    );
  }
  viewEmployeeData(id: any): Observable<any> {
    return this.http.get(
      `http://hamzaashiq467-001-site1.itempurl.com/Employee/GetEmployeebyID?id=${id}`
    );
  }
}
