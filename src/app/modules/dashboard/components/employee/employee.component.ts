import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { DeleteEmployeeComponent } from './../delete-employee/delete-employee.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { MatSort } from '@angular/material/sort';
import { employeeGrid } from 'src/app/_interfaces/employeeGrid';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'employee_id',
    'name',
    'email',
    'mobile',
    'designation',
    'actions',
  ];

  @ViewChild('employeeDataPage') paginator!: MatPaginator;

  pageSizeOptions: number[] = [5, 10, 25, 100];
  public employeeData: any;//new MatTableDataSource<employeeGrid>();
  constructor( public dialog: MatDialog,private personalDetails: PersonalDetailsService,private employeeDataa: EmployeeDataService) {}

  ngOnInit(): void {
    this.getEmployeeData();
  }
  ngAfterViewInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.employeeData.filter = filterValue.trim().toLowerCase();
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
    this.personalDetails.getEmployeeData().subscribe( (data:any) => {

      this.employeeData = new MatTableDataSource<employeeGrid>(data.data);

      this.employeeData.paginator = this.paginator;

    });
  }
  onRowClicked(row: any) {
    alert('Row clicked: '+ row.empID);
 }
}
