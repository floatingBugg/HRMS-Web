import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.scss']
})
export class ViewAssetComponent implements OnInit {
  public assetname: any;
  public assetid: any;
  public serialno: any;
  public model: any;
  public companyname: any;
  public type: any;
  public size: any;
  public condition: any;
  public generation: any;
  public ram: any;
  public processor: any;
  public storage: any;
  public hardtype: any;
  public purchasedate: any;
  public cost: any;
  public quantity: any;
  public remaining: any;

  rowId: any;
  
  constructor(public Inventory: InventoryService,public route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.rowId = this.route.snapshot.paramMap.get('id');
    this.getAssetDataByID(this.rowId);
  }

  getAssetDataByID(rowId: any) {
    this.Inventory
      .getAssetById(rowId)
      .subscribe((data: any) => {
        if (data.success) {
          let oneAssetData = data.data;
          debugger;
          this.assetname=oneAssetData[0].itaAssetName;
          this.companyname=oneAssetData[0].itaCompanyName;
          this.generation=oneAssetData[0].itaGeneration;
          this.type=oneAssetData[0].itaType;
          this.serialno=oneAssetData[0].itaSerialNo;
          this.model=oneAssetData[0].itaModel;
          this.ram=oneAssetData[0].itaRam;
          this.processor=oneAssetData[0].itaProcessor;
          this.storage=oneAssetData[0].itaStorage;
          this.hardtype=oneAssetData[0].itaHardriveType;
          this.size=oneAssetData[0].itaSize;
          this.remaining=oneAssetData[0].ItaRemaining;
          this.purchasedate=oneAssetData[0].ItaPurchaseDate;
          this.cost=oneAssetData[0].ItaCost;
          this.quantity=oneAssetData[0].ItaQuantity;
          
          
      }
        else 
        {
        }
      });
  }

}
