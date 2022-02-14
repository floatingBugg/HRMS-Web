import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LeaveformComponent } from '../leaveform/leaveform.component';
import { LeaveService } from '../services/leave.service';
import { PermissionsService } from '../services/permissionsService/permissions.service';
import { employeeGrid } from '../_interfaces/employeeGrid';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  @ViewChild('employeeDataPage') paginator!: MatPaginator;


  roleid = localStorage.getItem('loggedIn_RoleId');
  empid=localStorage.getItem('loggedIn_empid');
  userName = localStorage.getItem('loggedIn_UserName');
  _roleId = localStorage.getItem('loggedIn_RoleId');
  ID!: any;
  Name!: string;
  Designation!:string;
  Sick!: any;
  Casual!: any;
  Annual!:any;
  Total!:string;
  Action!:any;
  dummydata:any=[];
  public employeeData:any;
  pageSizeOptions: number[] = [ 10, 25, 100];

  displayedColumns: string[] = ['ID','Name','Designation','Sick','Casual','Annual','Total','Action'];
  // dataSource :any;

constructor(public dialog: MatDialog,private leave:LeaveService,private permission:PermissionsService)
{
  this.dummydata = [
    {ID: 1, Name: 'Hamza Ashiq', Designation: 'Internee', Sick: '2',Casual:'3',Annual:'18',Total:'5',Action:''},
    {ID: 2, Name: 'Nidal Pervaiz', Designation: 'Internee', Sick: '7',Casual:'3',Annual:'18',Total:'10',Action:''},
    {ID: 3, Name: 'Zohaib Ahmad', Designation: 'Internee', Sick: '1',Casual:'5',Annual:'18',Total:'6',Action:''},
    {ID: 4, Name: 'Husnain Zafar', Designation: 'Internee', Sick: '9',Casual:'6',Annual:'18',Total:'15',Action:''},
    {ID: 5, Name: 'Naveed Ali', Designation: 'Internee', Sick: '2',Casual:'3',Annual:'18',Total:'5',Action:''},
    // {ID: 6, Name: 'Hydrogen', Designation: 1.0079, Sick: '2',Casual:'3',Annual:'4',Total:'15',Action:''},
    // {ID: 7, Name: 'Hydrogen', Designation: 1.0079, Sick: '2',Casual:'3',Annual:'4',Total:'15',Action:''},
  ];
}
  ngOnInit(): void {
    // debugger
    this.getEmployeeData();
 this.dummydata = this.dummydata;
  }
  openDilog(){
    
 this.dialog.open(LeaveformComponent)
  }
  getEmployeeData() {
    this.leave.getEmployeeLeaveData().subscribe( (data:any) => {
      this.employeeData = new MatTableDataSource<employeeGrid>(data.data);
      debugger
      var name = this.employeeData.filteredData[0].lmslrEtedEmployeeName;
     // this.employeeData.sort = this.sort;
      this.leave.name = name;
      this.employeeData.paginator = this.paginator;

    });
  }

}
