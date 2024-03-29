import { DeleteEmployeeComponent } from './../delete-employee/delete-employee.component';
import { Component,OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { MatSort } from '@angular/material/sort';
import { employeeGrid } from 'src/app/_interfaces/employeeGrid';
import { PersonalGrid } from 'src/app/_interfaces/personal-grid';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { PermissionsService } from 'src/app/services/permissionsService/permissions.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  roleid = localStorage.getItem('loggedIn_RoleId');
  empid=localStorage.getItem('loggedIn_empid');
  userName = localStorage.getItem('loggedIn_UserName');
  
  @ViewChild('employeeDataPage') paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  displayedColumns: string[] = [
    'empID',
    'fullName',
    'empDesignation',
    'contactNumber',
    'emailAddress',
    'empStatus',
    'manager',
    'actions',
  ];
  _update:boolean=false
  _delete:boolean=false
  _insert:boolean=false
  _view:boolean=false
  _employeeView:boolean=false
  
  _roleId = localStorage.getItem('loggedIn_RoleId');
 
  pageSizeOptions: number[] = [ 10, 25, 100];
  public employeeData:any;
  public personalData:any;
   // new MatTableDataSource<employeeGrid>();

  constructor( public dialog: MatDialog,private personalDetails: PersonalDetailsService,
    public empDataService: EmployeeDataService,private permissionService: PermissionsService) {}

  ngOnInit(): void {
    this.getEmployeeData();
    this.initializeSorting();
    this.getPermissions();
  }

 initializeSorting(): void{
  setTimeout(() => {
    this.employeeData.sort = this.sort;
    this.personalData.sort=this.sort;
  },1000);
 }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.employeeData.filter = filterValue.trim().toLowerCase();
    this.personalData.filter = filterValue.trim().toLowerCase();
  }

  deleteEmployeeById(id: any) {
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
    this.personalDetails.getEmployeeData1(this.roleid,this.empid).subscribe( (data:any) => {
      this.employeeData = new MatTableDataSource<employeeGrid>(data.data);
      this.personalData= new MatTableDataSource<PersonalGrid>(data.data2);
     // this.employeeData.sort = this.sort;
      this.employeeData.paginator = this.paginator;

    });
  }
  // onRowClicked(row: any) {}
  getPermissions(){
    const permissions = this.permissionService.getPermissionsByRole(this._roleId);
    this._update = permissions.update;
    this._delete = permissions.delete;
    this._insert = permissions.insert;
    this._view = permissions.view;
    this._employeeView=permissions.employeeView;
  }
}
