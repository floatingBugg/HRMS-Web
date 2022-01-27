import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InventoryService } from 'src/app/services/inventory.service';
import { ActivatedRoute } from '@angular/router';
import { SaveAssignedDataService } from 'src/app/services/save-assigned-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { UnassignAssetEmployeeGrid } from 'src/app/_interfaces/unassign-asset-employee-grid';
import { MatPaginator } from '@angular/material/paginator';
import { AssignQuantityComponent } from '../assign-quantity/assign-quantity.component';

@Component({
  selector: 'app-assign-asset',
  templateUrl: './assign-asset.component.html',
  styleUrls: ['./assign-asset.component.scss']
})
export class AssignAssetComponent implements OnInit {
empId:any;
categoryid:any;
assetid:any;
quantity:any;
assigndate:any;


  constructor( public dialog: MatDialog,
    private inventory: InventoryService,
    public route: ActivatedRoute,
    public saveAssignedData:SaveAssignedDataService ) { }

  ngOnInit(): void {
    this.getAssetByCategoryID();
  }
  public assetData:any;
  @ViewChild('assetDataPage') paginator!: MatPaginator;

  pageSizeOptions: number[] = [ 5, 10, 15];
  displayedColumns: string[] = [
    'assetid',
    'assetname',
    'category',
    'actions',
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.assetData.filter = filterValue.trim().toLowerCase();
  }

  onCreate(asset: any)
  {
    this.inventory._assetObj[this.inventory.assetObj.length] = asset;  
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "40%";
      this.dialog.open(AssignQuantityComponent);
  }

  getAssetByCategoryID() {
    this.inventory
      .getAllUnAsset()
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
        this.assetData = new MatTableDataSource<UnassignAssetEmployeeGrid>(data.data);
        this.assetData.paginator=this.paginator;
        this.saveAssignedData.assignedData['itaAssetName']= data.itaAssetName;
        console.log( 'hello',this.saveAssignedData.assignedData['itaAssetName'])
      });
  }

}
