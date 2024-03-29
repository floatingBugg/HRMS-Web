import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PersonalDetailsService {
  users1: any;
  salary: any;
  constructor(private http: HttpClient) {}
  
  _userId = localStorage.getItem('loggedIn_UserId');
  _userName = localStorage.getItem('loggedIn_UserName');
  _roleId = localStorage.getItem('loggedIn_roleId');
  _empid = localStorage.getItem('loggedIn_empid');
  
  _managerId: number = 0;
  

  _responseMessage: any = '';
  apiUrl = 'http://localhost:57208';
  get responseMessage() {
    return this._responseMessage;
  }
  get managerId(){
    return this._managerId;
  }
  personalDetails(data: any): Observable<any> {

    return this.http.post(this.apiUrl + '/Employee/AddEmployee', data);
  }
  getempsalary(){
    
    return this.salary;
  }
  getEmployeeData() {
    let url = this.apiUrl + '/Employee/DisplayAllEmployees';
    return this.http.get(url);
  }
  getEmployeeData1(roleid:any,empid:any,) {
    return this.http.get(this.apiUrl + `/Employee/DisplayAllEmployeesbyRoles?roleid=${roleid}&empid=${empid}`);
  }
  deleteEmployeeData(empid: any) {
    return this.http.delete(this.apiUrl + `/Employee/DeleteEmployee?empid=${empid}`);
  }
  viewEmployeeData(id: any): Observable<any> {
    return this.http.get(this.apiUrl + `/Employee/GetEmployeebyID?id=${id}`);
  }

  updateEmployeeData(data: any): Observable<any> {
    return this.http.post(this.apiUrl + '/Employee/UpdateEmployee', data);
  }
  addDropdownValue(data: any): Observable<any> {
   return this.http.post(this.apiUrl + "/Dropdown/AddDropdownValue", data);
  }
  getDropdownValue(id:any): Observable<any> {
   return this.http.get(this.apiUrl + `/Employee/GetEmployeeDesignationbyID?id=${id}`);
  }
  
}
