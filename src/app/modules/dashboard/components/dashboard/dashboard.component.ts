import { SpinnerService } from 'src/app/services/spinner.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { inject } from '@angular/core/testing';
import { Location } from '@angular/common';
import { BaseCdkCell } from '@angular/cdk/table';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  router: any;
  constructor(  private location:Location , public spinnerService: SpinnerService, public loginService: LoginService) {
    // inject Location 
   }

  ngOnInit(): void {
  }
  logout(){
    this.loginService.logoutUser();
  }
  back(): void{
    this.location.back();
}
// goForward() {
//   this.location.forward();
// }
}
