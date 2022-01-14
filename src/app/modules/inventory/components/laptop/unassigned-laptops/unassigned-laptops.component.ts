import {DeleteEmployeeComponent} from '../../../../dashboard/components/delete-employee/delete-employee.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { MatSort } from '@angular/material/sort';
import { AssetGrid } from 'src/app/_interfaces/asset-grid';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { AllEmployeesComponent } from '../../all-employees/all-employees.component';
import { InventoryService } from 'src/app/services/inventory.service';
import { ActivatedRoute } from '@angular/router';
import { SaveAssignedDataService } from 'src/app/services/save-assigned-data.service';

@Component({
  selector: 'app-unassigned-laptops',
  templateUrl: './unassigned-laptops.component.html',
  styleUrls: ['./unassigned-laptops.component.scss']
})
export class UnassignedLaptopsComponent implements OnInit {
  @ViewChild('assetDataPage') paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  
  // public assetID: any;
  // public assetName: any;
  // public company: any;
  // public ram: any;
  // public processor: any;
  // public storage: any;
  // public generation: any;
  itacCategoryId=1;
  count: number = 1;
  public categoryId:any;
  

  displayedColumns: string[] = [
    'assetID',
    'name',
    'company',
    'ram',
    'processor',
    'storage',
    'generation',
    'actions',
  ];


  pageSizeOptions: number[] = [ 10, 25, 100];
  public assetData:any;// new MatTableDataSource<employeeGrid>();
  rowId= 1;

  constructor(
    public dialog: MatDialog,
    private inventory: InventoryService,
    public route: ActivatedRoute,
    public saveAssignedData:SaveAssignedDataService   ) { }

  ngOnInit(): void {
    //this.rowId = this.route.snapshot.paramMap.get('id');
    this.getAssetByCategoryID(this.itacCategoryId);
    
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
        this.assetData = new MatTableDataSource<AssetGrid>(data.data);

        this.saveAssignedData.assignedData['itaAssetName']= data.itaAssetName;
        console.log( 'hello',this.saveAssignedData.assignedData['itaAssetName'])
      });
  }

getAssignedData(){
 
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.assetData.filter = filterValue.trim().toLowerCase();
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
  
  }

