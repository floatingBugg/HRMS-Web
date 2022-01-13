import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color!: string;
  pageSizeOptions: number[] = [10, 25, 100];
  public assets: any; // new MatTableDataSource<employeeGrid>()
  laptop: any;
  networkDevices = 'Network Devices';
  screens = 'screens';
  cctvCameras = 'CCTV-Cameras';
  AC = 'AC';
  Printers = 'Printers';
  assetID!: string;
 

  constructor(private router: Router) {}
  

  


  ngOnInit(): void {

  }

 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.assets.filter = filterValue.trim().toLowerCase();
  }

  getId(event: any) {
    this.assetID = event.target.id;
    if (this.assetID == 'laptops') {
      this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    } else if (this.assetID == 'screens') {
      this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    } else if (this.assetID == 'keyboard') {
      this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    } else if (this.assetID == 'mouse') {
      this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    } else if (this.assetID == 'printers') {
      this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    } else if (this.assetID == 'power-cables') {
      this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    } else if (this.assetID == 'stationery') {
      this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    } else if (this.assetID == 'cameras') {
      this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    } else if (this.assetID == 'drives') {
      this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    } else if (this.assetID == 'ac') {
      this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    } else if (this.assetID == 'fans') {
      this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    } else if (this.assetID == 'furniture') {
      this.router.navigate([`/inventory/asset-reserve/${this.assetID}`]);
    }
  }
}
