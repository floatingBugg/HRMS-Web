import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(public personalDetails:PersonalDetailsService
    , public employeeData: EmployeeDataService
    , public dialogRef: MatDialogRef<DeleteEmployeeComponent>) { }

  ngOnInit(): void {
  }

  submit(value:boolean){
    this.dialogRef.close(value)
  }

}
