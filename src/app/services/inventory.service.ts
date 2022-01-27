import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  _userId = localStorage.getItem('loggedIn_UserId');
  _userName = localStorage.getItem('loggedIn_UserName');
  _catagoryId = 0;
  _assetId = 0;
  _employeeId = 0;
  _responseMessage: any = '';
  apiUrl = 'http://localhost:57208';
  get responseMessage() {
    return this._responseMessage;
  }
  constructor(private http: HttpClient) { }

  get assetId(){
    return this._assetId;
  }
  get catagoryId(){
    return this._catagoryId;
  }
  get employeeId(){
    return this._employeeId;
  }
  
  postAssets(data: any): Observable<any> {

    return this.http.post(this.apiUrl + '/Asset/AddAsset', data);
  }
  getAssetData(id: any):  Observable<any> {
    
    return this.http.get(this.apiUrl + `/Asset/DisplayAssetUnassign?type=${id}`);
  }

  getLaptopQuantity(categoryid :any):Observable<any>{
    return this.http.get(this.apiUrl + `/Asset/GetAllQuantity?categoryid=${categoryid}`);
  }
  getLaptopCost(categoryid :any):Observable<any>{
    return this.http.get(this.apiUrl + `/Asset/GetAllSum?categoryid=${categoryid}`);
  }

  getAllSum(categoryid :any):Observable<any>{
    return this.http.get(this.apiUrl + `/Asset/GetAllSum?categoryid=${categoryid}`);
  }

  postAssetsAssign(data: any): Observable<any> {

    return this.http.post(this.apiUrl + '/Asset/AssignAsset', data);
  }
 
  getAssetAssign(type: any):  Observable<any> {
    
    return this.http.get(this.apiUrl + `/Asset/DisplayAssignAsset?type=${type}`);
  }

  deleteAssetAssign(assignid: any):  Observable<any> {
    
    return this.http.delete(this.apiUrl + `/Asset/DeleteAssignedAsset?assignid=${assignid}`);
  }

  getAssetById(type: any):  Observable<any> {
    
    return this.http.get(this.apiUrl + `/Asset/DisplayAssetById?type=${type}`);
  }
}
