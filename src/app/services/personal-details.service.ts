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
      'https://localhost:44390/Employee/Add',
      data
    );
  }
  getEmployeeData() {
    let url =
      'http://hamzaashiq46-001-site1.ftempurl.com/Employee/DisplayAllEmployees';
    return this.http.get(url);
  }
  deleteEmployeeData(id: any) {
    return this.http.delete(
      `http://hamzaashiq46-001-site1.ftempurl.com/Employee/Remove?id=${id}`
    );
  }
}
