import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { MatSort } from '@angular/material/sort';
import { employeeGrid } from 'src/app/_interfaces/employeeGrid';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { AssignComponent } from '../assign/assign.component';
import { InventoryService } from 'src/app/services/inventory.service';
import { AddEmployeeComponent } from 'src/app/modules/dashboard/components/add-employee/add-employee.component';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss']
})
export class AllEmployeesComponent implements OnInit {
  
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

  constructor( public dialog: MatDialog,private personalDetails: PersonalDetailsService, private inventory: InventoryService,
    public empDataService: EmployeeDataService , private addemployee :AddEmployeeComponent) { }

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
  
        this.employeeData = new MatTableDataSource<employeeGrid>(data.data);
       // this.employeeData.sort = this.sort;
        this.employeeData.paginator = this.paginator;
  
      });
    }
    // onRowClicked(row: any) {}
    onCreate(empId: number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "40%"
      this.inventory._employeeId = empId;
           
      this.dialog.open(AssignComponent);
     }
}
