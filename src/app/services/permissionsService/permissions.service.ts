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
      view:false,
      isSuperadmin:false,
      isAdmin:false,
      isTeamLead:false,
      isUser:false,
      employeeView:false
    }
  }


 
getPermissionsByRole(roleId:any){
    if(roleId ==1){
      this._permissions.delete = true;
      this._permissions.update = true;
      this._permissions.insert = true;
      this._permissions.view = true;
      this._permissions.isSuperadmin=true;
      this._permissions.employeeView=true;
    }
    else if(roleId==2){
      this._permissions.delete = false;
      this._permissions.update = true;
      this._permissions.insert = true;
      this._permissions.view = true;
      this._permissions.isAdmin=true;
      this._permissions.employeeView=true;
    }
    else if(roleId==3){
      this._permissions.delete = false;
      this._permissions.update = false;
      this._permissions.insert = false;
      this._permissions.view = true;
      this._permissions.isTeamLead=true;
      this._permissions.employeeView=true;
    }
    else if(roleId==4){
      this._permissions.delete = false;
      this._permissions.update = false;
      this._permissions.insert = false;
      this._permissions.view = true;
      this._permissions.isUser=true;
      this._permissions.employeeView=false;
    }
    return this._permissions;
  }
}
