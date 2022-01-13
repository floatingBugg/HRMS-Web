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
      'http://hamzaashiq467-001-site1.itempurl.com/auth/userAuth', data
    );
  }

}
