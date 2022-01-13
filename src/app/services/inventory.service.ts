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
  getAssetData(id: any):  Observable<any> {
    
    return this.http.get(this.apiUrl + `/Asset/DisplayAssetUnassign?type=${id}`);
  }

  getsumofAsset(categoryid: any):  Observable<any> {
    
    return this.http.get(this.apiUrl + `/Asset/GetAllSum?type=${categoryid}`);
  }

}
