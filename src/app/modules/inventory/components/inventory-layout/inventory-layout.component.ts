import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inventory-layout',
  templateUrl: './inventory-layout.component.html',
  styleUrls: ['./inventory-layout.component.scss']
})
export class InventoryLayoutComponent implements OnInit {
  // router:any;

  constructor(private location:Location, private loginService: LoginService){ }

  ngOnInit(): void {
  }
  logout() {
    this.loginService.logoutUser();
  }
  goback(){
    this.location.back();
  }

}
