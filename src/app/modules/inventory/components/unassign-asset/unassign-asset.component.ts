import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InventoryService } from 'src/app/services/inventory.service';
import { SaveAssignedDataService} from 'src/app/services/save-assigned-data.service';

@Component({
  selector: 'app-unassign-asset',
  templateUrl: './unassign-asset.component.html',
  styleUrls: ['./unassign-asset.component.scss']
})
export class UnassignAssetComponent implements OnInit {

  constructor(public inventoryservice:InventoryService,
    public dialogRef: MatDialogRef<UnassignAssetComponent>,
    public saveData: SaveAssignedDataService) { }

  ngOnInit(): void {
  }
  
  submit(value:boolean){
    this.dialogRef.close(value)
  }
}
