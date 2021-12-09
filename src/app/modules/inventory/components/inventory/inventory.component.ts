import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius !: number;
  color !: string;

  constructor(private loginService: LoginService){ }

  ngOnInit(): void {
    
  }
  logout() {
    this.loginService.logoutUser();
  }


 


}
