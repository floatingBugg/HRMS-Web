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
import { ActivatedRoute } from '@angular/router';
import { SaveAssignedDataService } from 'src/app/services/save-assigned-data.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { AssetassignGrid } from 'src/app/_interfaces/Assetassign-Grid';
import { UnassignAssetComponent } from '../../unassign-asset/unassign-asset.component';

@Component({
  selector: 'app-assigned-printers',
  templateUrl: './assigned-printers.component.html',
  styleUrls: ['./assigned-printers.component.scss']
})
export class AssignedPrintersComponent implements OnInit {
  
  @ViewChild('employeeDataPage') paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  itacCategoryId=6;
  public categoryId:any;
  displayedColumns: string[] = [
    'assignid',
    'name',
    'company',
    'type',
    'assignedTo',
    'quantity',
    'actions',
  ];


  pageSizeOptions: number[] = [ 10, 25, 100];
  public employeeData:any;// new MatTableDataSource<employeeGrid>();
  public assetData:any;

  constructor(
    public dialog: MatDialog,private personalDetails: PersonalDetailsService,
    public empDataService: EmployeeDataService,private inventory: InventoryService,
    public route: ActivatedRoute,
    public saveAssignedData:SaveAssignedDataService) { }

  ngOnInit(): void {
    this.initializeSorting();
    this.getAssetByCategoryID(this.itacCategoryId);
  }
  initializeSorting(): void{
    setTimeout(() => {
      this.employeeData.sort = this.sort;
    },1000);
  }
  unAssignAssetById(assignid: any) {
    const dialogRef = this.dialog.open(UnassignAssetComponent);
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res == true) {
        this.inventory.deleteAssetAssign(assignid).subscribe((data) => {
          if(data){
            this.getAssetByCategoryID(this.itacCategoryId);
          }
        });
      }
    });
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
  getAssetByCategoryID(itacCategoryId: any) {
    this.inventory
      .getAssetAssign(itacCategoryId)
      .subscribe((data: any) => {
      
        this.assetData = new MatTableDataSource<AssetassignGrid>(data.data);
  
        this.saveAssignedData.assignedData['itaAssetName']= data.itaAssetName;
        console.log( 'hello',this.saveAssignedData.assignedData['itaAssetName'])
      });
  }


  // onRowClicked(row: any) {}



}
