import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { MatSort } from '@angular/material/sort';
import { employeeGrid } from 'src/app/_interfaces/employeeGrid';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-assign-manager',
  templateUrl: './assign-manager.component.html',
  styleUrls: ['./assign-manager.component.scss']
})
export class AssignManagerComponent implements OnInit {

  @ViewChild('employeeDataPage') paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  displayedColumns: string[] = [
    'empID',
    'fullName',
    'empDesignation',
    'contactNumber',
    'emailAddress',
    'actions',
  ];


  pageSizeOptions: number[] = [ 10, 25, 100];
  public employeeData:any;// new MatTableDataSource<employeeGrid>();
  managerId: number = 0;
  constructor( public dialog: MatDialog,private personalDetails: PersonalDetailsService,
    public empDataService: EmployeeDataService) { }

    ngOnInit(): void {
      this.getEmployeeData();
      this.initializeSorting();
    }
  
   initializeSorting(): void{
    setTimeout(() => {
      this.employeeData.sort = this.sort;
    },1000);
   }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.employeeData.filter = filterValue.trim().toLowerCase();
    }
  
  
    getEmployeeData() {
      this.personalDetails.getEmployeeData().subscribe( (data:any) => {
  
        this.employeeData = new MatTableDataSource<employeeGrid>(data.data2);
       // this.employeeData.sort = this.sort;
        this.employeeData.paginator = this.paginator;
  
      });
    }
    // onRowClicked(row: any) {}
    onCreate(empId: number){
      // const dialogConfig = new MatDialogConfig();
      // dialogConfig.disableClose = true;
      // dialogConfig.autoFocus = true;
      // dialogConfig.width = "40%"
      
      this.personalDetails._managerId = empId;
      this.dialog.closeAll();
     }

}
