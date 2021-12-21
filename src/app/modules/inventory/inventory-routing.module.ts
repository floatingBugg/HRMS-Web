import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcComponent } from './components/ac/ac.component';
import { AssetReserveComponent } from './components/asset-reserve/asset-reserve.component';
import { CctvCamerasComponent } from './components/cctv-cameras/cctv-cameras.component';
import { DrivesComponent } from './components/drives/drives.component';
import { FansComponent } from './components/fans/fans.component';
import { FurnitureComponent } from './components/furniture/furniture.component';
import { InventoryLayoutComponent } from './components/inventory-layout/inventory-layout.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { KeyBoardComponent } from './components/key-board/key-board.component';
import { LaptopComponent } from './components/laptop/laptop.component';
import { MouseComponent } from './components/mouse/mouse.component';
import { PowerCablesComponent } from './components/power-cables/power-cables.component';
import { PrintersComponent } from './components/printers/printers.component';
import { ScreensComponent } from './components/screens/screens.component';
import { StationeryComponent } from './components/stationery/stationery.component';

const routes: Routes = [
  {
    path: '', component: InventoryLayoutComponent, children: [
      { path: '', component: InventoryComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'screens', component: ScreensComponent},
      { path: 'drives', component: DrivesComponent},
      { path: 'cctv-cameras', component: CctvCamerasComponent},
      { path: 'ac', component: AcComponent},
      { path: 'printers', component: PrintersComponent},
      { path: 'key-board', component: KeyBoardComponent},
      { path: 'mouse', component: MouseComponent},
      { path: 'power-cables', component: PowerCablesComponent},
      { path: 'stationery', component: StationeryComponent},
      { path: 'fans', component: FansComponent},
      { path: 'furniture', component: FurnitureComponent},
      { path: 'asset-reserve', component: AssetReserveComponent},
      
    ]
  }];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
