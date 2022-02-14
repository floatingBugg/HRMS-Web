import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PermissionsService } from 'src/app/services/permissionsService/permissions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;
  roleid = localStorage.getItem('loggedIn_RoleId');
  empid=localStorage.getItem('loggedIn_empid');
  userName = localStorage.getItem('loggedIn_UserName');
  
  _update:boolean=false
  _delete:boolean=false
  _insert:boolean=false
  _view:boolean=false
  _employeeView:boolean=false


  radius !: number;
  color !: string;
  constructor(private router:Router, public loginService: LoginService,private permissionService: PermissionsService) { }

  ngOnInit(): void {
    this.getPermissions();
  }
  logout(){
    this.loginService.logoutUser();
  }

  getPermissions(){
    debugger;
    const permissions = this.permissionService.getPermissionsByRole(this.roleid);
    this._update = permissions.update;
    this._delete = permissions.delete;
    this._insert = permissions.insert;
    this._view = permissions.view;
    this._employeeView=permissions.employeeView;
  }
}
