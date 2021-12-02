import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(
      'http://hamzaashiq46-001-site1.ftempurl.com/auth/userAuth', data
    );
  }

}
