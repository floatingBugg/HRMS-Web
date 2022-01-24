import { Injectable } from '@angular/core';
import {PermissionsModel} from './permissions-model'
@Injectable({
  providedIn: 'root'
})
export class PermissionsService {


  _permissions: PermissionsModel
  constructor() { 
    this._permissions={
      update:false,
      delete:false,
      insert:false,
      view:false
    }
  }


 
getPermissionsByRole(roleId:any){
    if(roleId ==1){
      this._permissions.delete = true;
      this._permissions.update = true;
      this._permissions.insert = true;
      this._permissions.view = true;
    }
    else if(roleId==2){
      this._permissions.delete = false;
      this._permissions.update = true;
      this._permissions.insert = true;
      this._permissions.view = true;
    }
    else if(roleId==3){
      this._permissions.delete = false;
      this._permissions.update = false;
      this._permissions.insert = false;
      this._permissions.view = true;
    }
    else if(roleId==4){
      this._permissions.delete = false;
      this._permissions.update = false;
      this._permissions.insert = false;
      this._permissions.view = true;
    }
    return this._permissions;
  }
}
