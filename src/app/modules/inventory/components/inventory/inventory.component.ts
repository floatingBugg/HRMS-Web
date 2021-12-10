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

  pageSizeOptions: number[] = [ 10, 25, 100];
  public assets:any;// new MatTableDataSource<employeeGrid>();
  constructor(private loginService: LoginService){ }

  ngOnInit(): void {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.assets.filter = filterValue.trim().toLowerCase();
  }

 


}
