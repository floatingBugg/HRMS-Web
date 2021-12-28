import {DeleteEmployeeComponent} from '../../../../dashboard/components/delete-employee/delete-employee.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { MatSort } from '@angular/material/sort';
import { employeeGrid } from 'src/app/_interfaces/employeeGrid';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assigned-stationery',
  templateUrl: './assigned-stationery.component.html',
  styleUrls: ['./assigned-stationery.component.scss']
})
export class AssignedStationeryComponent implements OnInit {

  @ViewChild('employeeDataPage') paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  displayedColumns: string[] = [
    'assetID',
    'name',
    'type',
    'quantity',
    'assignedTo',
    'actions',
  ];


  pageSizeOptions: number[] = [ 10, 25, 100];
  public employeeData:any;// new MatTableDataSource<employeeGrid>();

  constructor(
    public dialog: MatDialog,private personalDetails: PersonalDetailsService,
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
  // deleteEmployeeById(id: any) {
  //   const dialogRef = this.dialog.open(DeleteEmployeeComponent);
  //   dialogRef.afterClosed().subscribe((res: any) => {
  //     if (res == true) {
  //       this.personalDetails.deleteEmployeeData(id).subscribe((data) => {
  //         if(data){
  //           this.getEmployeeData();
  //         }
  //       });
  //     }
  //   });
  // }

  getEmployeeData() {
    this.personalDetails.getEmployeeData().subscribe( (data:any) => {

      this.employeeData = new MatTableDataSource<employeeGrid>(data.data);
     // this.employeeData.sort = this.sort;
      this.employeeData.paginator = this.paginator;

    });
  }
  // onRowClicked(row: any) {}

}
