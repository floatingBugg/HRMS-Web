import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  _userId = localStorage.getItem('loggedIn_UserId');
  _userName = localStorage.getItem('loggedIn_UserName');
  _roleId = localStorage.getItem('loggedIn_roleId');
  _empid = localStorage.getItem('loggedIn_empid');

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:57208';


  
  getEmployeeLeaveData(roleid:any,empid:any,) {
    return this.http.get(this.apiUrl + `/Leave/DisplayAllEmployeesbyRoles?roleid=${roleid}&empid=${empid}`);
  }
}
