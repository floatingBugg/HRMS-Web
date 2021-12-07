import { FormGroup } from '@angular/forms';
import { EmployeeDataService } from '../../../../../services/employee-data.service';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss'],
})
export class ViewEmployeeComponent implements OnInit {
  constructor(public employeeDataS: EmployeeDataService) {}

  ngOnInit(): void {}
}
