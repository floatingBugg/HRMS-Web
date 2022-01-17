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
import { InventoryService } from 'src/app/services/inventory.service';
import { ActivatedRoute } from '@angular/router';
import { SaveAssignedDataService } from 'src/app/services/save-assigned-data.service';
import { AssetassignGrid } from 'src/app/_interfaces/Assetassign-Grid';

@Component({
 
  selector: 'app-assigned-screens',
  templateUrl: './assigned-screens.component.html',
  styleUrls: ['./assigned-screens.component.scss']
})
export class AssignedScreensComponent implements OnInit {
  @ViewChild('employeeDataPage') paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  displayedColumns: string[] = [
    'assetID',
    'name',
    'company',
    'size',
    'assignedTo',
    'actions',
  ];
  itacCategoryId=2;
  public categoryId:any;

  pageSizeOptions: number[] = [ 10, 25, 100];
  public assetData:any;// new MatTableDataSource<employeeGrid>();
  rowId= 1;


  constructor(
    public dialog: MatDialog,private personalDetails: PersonalDetailsService,
    public empDataService: EmployeeDataService,private inventory: InventoryService,
    public route: ActivatedRoute,
    public saveAssignedData:SaveAssignedDataService
   
  ) { }
   
  selectedId!:number;

  ngOnInit(): void {
    this.getEmployeeData();
    this.initializeSorting();
    this.getAssetByCategoryID(this.itacCategoryId);
  }
  initializeSorting(): void{
    setTimeout(() => {
      this.assetData.sort = this.sort;
    },1000);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.assetData.filter = filterValue.trim().toLowerCase();
  }
  

  getEmployeeData() {
    this.personalDetails.getEmployeeData().subscribe( (data:any) => {

      this.assetData = new MatTableDataSource<employeeGrid>(data.data);
     // this.employeeData.sort = this.sort;
      this.assetData.paginator = this.paginator;

    });
  }
  // onRowClicked(row: any) {}
  getAssetByCategoryID(itacCategoryId: any) {
    this.inventory
      .getAssetAssign(itacCategoryId)
      .subscribe((data: any) => {
      
        this.assetData = new MatTableDataSource<AssetassignGrid>(data.data);

        this.saveAssignedData.assignedData['itaAssetName']= data.itaAssetName;
        console.log( 'hello',this.saveAssignedData.assignedData['itaAssetName'])
      });
  }

}
