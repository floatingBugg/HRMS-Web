import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  _userId = localStorage.getItem('loggedIn_UserId');
  _userName = localStorage.getItem('loggedIn_UserName');
  _responseMessage: any = '';
  apiUrl = 'https://localhost:44324';
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

  getLaptopQuantity(categoryid :any):Observable<any>{
    return this.http.get(this.apiUrl + `/Asset/GetAllQuantity?categoryid=${categoryid}`);
  }

  getAllSum(categoryid :any):Observable<any>{
    return this.http.get(this.apiUrl + `/Asset/GetAllSum?categoryid=${categoryid}`);
  }

}
