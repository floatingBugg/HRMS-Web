import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-reserve',
  templateUrl: './asset-reserve.component.html',
  styleUrls: ['./asset-reserve.component.scss'],
})
export class AssetReserveComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color!: string;
  id: any;
  urlId: any;
  pageSizeOptions: number[] = [10, 25, 100];
  public assets: any; // new MatTableDataSource<employeeGrid>();

  ngOnInit(): void {}

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.urlId = this.activatedRoute.snapshot.params['id'];
    console.log('URL ID', this.urlId);
    // if (this.urlId == 'laptop') {
    //   this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    // }
  }
}
