import {DeleteEmployeeComponent} from '../../../../dashboard/components/delete-employee/delete-employee.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { MatSort } from '@angular/material/sort';
import { employeeGrid } from 'src/app/_interfaces/employeeGrid';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { ActivatedRoute } from '@angular/router';
import { SaveAssignedDataService } from 'src/app/services/save-assigned-data.service';
import { InventoryGrid } from 'src/app/_interfaces/inventoryGrid';
import { AllEmployeesComponent } from '../../all-employees/all-employees.component';
@Component({
  selector: 'app-unassigned-furniture',
  templateUrl: './unassigned-furniture.component.html',
  styleUrls: ['./unassigned-furniture.component.scss']
})
export class UnassignedFurnitureComponent implements OnInit {
  @ViewChild('employeeDataPage') paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  itacCategoryId=12;
  public categoryId:any;
  displayedColumns: string[] = [
    'assetID',
    'name',
    'type',
    'quantity',
    'actions',
  ];


  pageSizeOptions: number[] = [ 10, 25, 100];
  public employeeData:any;// new MatTableDataSource<employeeGrid>();
  public assetData:any;// new MatTableDataSource<employeeGrid>();
  rowId= 1;

  constructor(public dialog: MatDialog,private personalDetails: PersonalDetailsService,public empDataService: EmployeeDataService,private inventory: InventoryService,public route: ActivatedRoute,
    public saveAssignedData:SaveAssignedDataService) { }

  ngOnInit(): void {
    this.getAssetByCategoryID(this.itacCategoryId);
    this.initializeSorting();
  }
  initializeSorting(): void{
    setTimeout(() => {
      this.employeeData.sort = this.sort;
    },1000);
  }

  getAssetByCategoryID(itacCategoryId: any) {
    this.inventory
      .getAssetData(itacCategoryId)
      .subscribe((data: any) => {
        // if (data.success) {
        //   let oneAssetData = data.data;
        //  this.categoryId = oneAssetData[0].itacCategoryId
        //   this.assetID = oneAssetData[0].itaAssetId;
        //   this.assetName = oneAssetData[0].itaAssetName;
        //   this.company = oneAssetData[0].itaCompanyName;
        //   this.ram = oneAssetData[0].itaRam;
        //   this.processor = oneAssetData[0].itaProcessor;
        //   this.storage = oneAssetData[0].itaStorage;
        //   this.generation = oneAssetData[0].itaGeneration;
      
        // } else {
        // }
        this.assetData = new MatTableDataSource<InventoryGrid>(data.data);

        this.saveAssignedData.assignedData['itaAssetName']= data.itaAssetName;
        console.log( 'hello',this.saveAssignedData.assignedData['itaAssetName'])
      });
  }
  
  onCreate(assetId: number){
    
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "40%";
    
      this.inventory._assetId = assetId;
      this.inventory._catagoryId = this.itacCategoryId;
      this.dialog.open(AllEmployeesComponent);
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
  

  // onRowClicked(row: any) {}
}
