import {DeleteEmployeeComponent} from '../../../../dashboard/components/delete-employee/delete-employee.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { MatSort } from '@angular/material/sort';
import { employeeGrid } from 'src/app/_interfaces/employeeGrid';
import { MatPaginator } from '@angular/material/paginator';
import { InventoryService } from 'src/app/services/inventory.service';
import { SaveAssignedDataService } from 'src/app/services/save-assigned-data.service';
import { ActivatedRoute } from '@angular/router';
import { InventoryGrid } from 'src/app/_interfaces/inventoryGrid';
import { AllEmployeesComponent } from '../../all-employees/all-employees.component';

@Component({
  selector: 'app-unassigned-cameras',
  templateUrl: './unassigned-cameras.component.html',
  styleUrls: ['./unassigned-cameras.component.scss']
})
export class UnassignedCamerasComponent implements OnInit {
  @ViewChild('employeeDataPage') paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  itacCategoryId=4;
  public categoryId:any;

  displayedColumns: string[] = [
    'assetID',
    'name',
    'type',
    'actions',
  ];


  pageSizeOptions: number[] = [ 10, 25, 100];
  public employeeData:any;// new MatTableDataSource<employeeGrid>();
  public assetData:any;// new MatTableDataSource<employeeGrid>();
  rowId= 1;

  constructor(public dialog: MatDialog,private personalDetails: PersonalDetailsService,private inventory: InventoryService,public route: ActivatedRoute,
    public saveAssignedData:SaveAssignedDataService) { }

  ngOnInit(): void {
    this.getEmployeeData();
    this.getAssetByCategoryID(this.itacCategoryId);
    this.initializeSorting();
  }
  getAssetByCategoryID(itacCategoryId: any) {
    this.inventory
      .getAssetData(itacCategoryId)
      .subscribe((data: any) => {
      
        this.assetData = new MatTableDataSource<InventoryGrid>(data.data);

        this.saveAssignedData.assignedData['itaAssetName']= data.itaAssetName;
        console.log( 'hello',this.saveAssignedData.assignedData['itaAssetName'])
      });
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
  onCreate(assetId: number){
    
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "40%"
      this.inventory._assetId = assetId;
      this.inventory._catagoryId = this.itacCategoryId;
      this.dialog.open(AllEmployeesComponent);
  }


}
