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
name:any;
data:any;

  
  getEmployeeLeaveData() {
    return this.http.get(this.apiUrl + `/Leave/ViewAllLeaveRecord`);
  }
  assignEmployeeLeave(data:any):Observable<any> {
    return this.http.post(this.apiUrl + '/Leave/AssignLeave', data)
  }

  addEmployeeLeaves(data:any){
    return this.http.post(this.apiUrl +'/Leave/UpdateLeaveRecord', data);
  }

  // postAssets(data: any): Observable<any> {

  //   return this.http.post(this.apiUrl + '/Asset/AddAsset', data);
  // }
  getempName(){
    return this.name;
  }
}
function data(arg0: string, data: any) {
  throw new Error('Function not implemented.');
}

