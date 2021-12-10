import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inventory-layout',
  templateUrl: './inventory-layout.component.html',
  styleUrls: ['./inventory-layout.component.scss']
})
export class InventoryLayoutComponent implements OnInit {

  constructor(private loginService: LoginService){ }

  ngOnInit(): void {
  }
  logout() {
    this.loginService.logoutUser();
  }

}
