import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { DeleteEmployeeComponent } from './../delete-employee/delete-employee.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = [
    'employee_id',
    'name',
    'email',
    'mobile',
    'designation',
    'actions',
  ];
  dataSource = new MatTableDataSource(
    //this.employeeDataa
  );
 
  employeeData: any = [];

  constructor( public dialog: MatDialog,private personalDetails: PersonalDetailsService,private employeeDataa: EmployeeDataService) {}
  
  ngOnInit(): void {
    this.getEmployeeData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent);
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res == true) {
        this.personalDetails.deleteEmployeeData(id).subscribe((data) => {
          if(data){
            this.getEmployeeData();
          }

        });
      }
    });
  }

  getEmployeeData() {
    this.personalDetails.getEmployeeData().subscribe((data: any) => {
      this.employeeData = data.data;
      console.warn(this.employeeData);
    });
  }
}
