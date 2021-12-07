import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PersonalDetailsService {
  constructor(private http: HttpClient) {}

  personalDetails(data: any): Observable<any> {
    return this.http.post(
      'http://hamzaashiq467-001-site1.itempurl.com/Employee/Add',
      data
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
  viewEmployeeData(id: any){
    return this.http.get(
      `http://hamzaashiq467-001-site1.itempurl.com/Employee/GetEmployeebyID?id=${id}`
    );
  }
}
