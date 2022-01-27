import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InventoryService } from 'src/app/services/inventory.service';
import { ActivatedRoute } from '@angular/router';
import { SaveAssignedDataService } from 'src/app/services/save-assigned-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { UnassignAssetEmployeeGrid } from 'src/app/_interfaces/unassign-asset-employee-grid';

@Component({
  selector: 'app-assign-asset',
  templateUrl: './assign-asset.component.html',
  styleUrls: ['./assign-asset.component.scss']
})
export class AssignAssetComponent implements OnInit {

  constructor( public dialog: MatDialog,
    private inventory: InventoryService,
    public route: ActivatedRoute,
    public saveAssignedData:SaveAssignedDataService ) { }

  ngOnInit(): void {
  }
  public assetData:any;

  pageSizeOptions: number[] = [ 10, 25, 100];
  displayedColumns: string[] = [
    'assetID',
    'name',
    'category',
    'actions',
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.assetData.filter = filterValue.trim().toLowerCase();
  }

  onCreate(empid: number){
    
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "40%";
      this.inventory._employeeId=empid;
      this.dialog.closeAll();
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

        this.saveAssignedData.assignedData['itaAssetName']= data.itaAssetName;
        console.log( 'hello',this.saveAssignedData.assignedData['itaAssetName'])
      });
  }
}
