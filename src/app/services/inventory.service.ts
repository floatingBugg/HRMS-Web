import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  _responseMessage: any = '';
  apiUrl = 'http://hamzaashiq467-001-site1.itempurl.com';
  get responseMessage() {
    return this._responseMessage;
  }
  constructor(private http: HttpClient) { }


  
  postAssets(data: any): Observable<any> {

    return this.http.post(this.apiUrl + '/Asset/AddAsset', data);
  }
  getAssetsData() {
    let url = this.apiUrl + '/Employee/DisplayAllEmployees';
    return this.http.get(url);
  }

}
