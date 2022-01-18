import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.scss']
})
export class ViewAssetComponent implements OnInit {
  public assetname: any;
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
