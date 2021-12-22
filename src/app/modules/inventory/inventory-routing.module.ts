import { componentFactoryName } from '@angular/compiler';
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
import { AssignedKeyboardComponent } from './components/key-board/assigned-keyboard/assigned-keyboard.component';
import { KeyBoardComponent } from './components/key-board/key-board.component';
import { UnassignedKeyboardComponent } from './components/key-board/unassigned-keyboard/unassigned-keyboard.component';
import { AssignedLaptopsComponent } from './components/laptop/assigned-laptops/assigned-laptops.component';
import { LaptopComponent } from './components/laptop/laptop.component';
import { UnassignedLaptopsComponent } from './components/laptop/unassigned-laptops/unassigned-laptops.component';
import { AssignedMouseComponent } from './components/mouse/assigned-mouse/assigned-mouse.component';
import { MouseComponent } from './components/mouse/mouse.component';
import { UnassignedMouseComponent } from './components/mouse/unassigned-mouse/unassigned-mouse.component';
import { AssignedPowerCablesComponent } from './components/power-cables/assigned-power-cables/assigned-power-cables.component';
import { PowerCablesComponent } from './components/power-cables/power-cables.component';
import { UnassignedPowerCablesComponent } from './components/power-cables/unassigned-power-cables/unassigned-power-cables.component';
import { AssignedPrintersComponent } from './components/printers/assigned-printers/assigned-printers.component';
import { PrintersComponent } from './components/printers/printers.component';
import { UnassignedPrintersComponent } from './components/printers/unassigned-printers/unassigned-printers.component';
import { AssignedScreensComponent } from './components/screens/assigned-screens/assigned-screens.component';
import { ScreensComponent } from './components/screens/screens.component';
import { UnassignedScreensComponent } from './components/screens/unassigned-screens/unassigned-screens.component';
import { AssignedStationeryComponent } from './components/stationery/assigned-stationery/assigned-stationery.component';
import { StationeryComponent } from './components/stationery/stationery.component';
import { UnassignedStationeryComponent } from './components/stationery/unassigned-stationery/unassigned-stationery.component';

const routes: Routes = [
  {
    path: '', component: InventoryLayoutComponent, children: [
      { path: '', component: InventoryComponent },
      { path: 'laptop', component: LaptopComponent},
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
      { path: 'assigned-laptops', component: AssignedLaptopsComponent},
      { path: 'unassigned-laptops', component: UnassignedLaptopsComponent},
      { path: 'assigned-keyboard', component: AssignedKeyboardComponent},
      { path: 'unassigned-keyboard', component: UnassignedKeyboardComponent},
      { path: 'assigned-mouse', component: AssignedMouseComponent},
      { path: 'unassigned-mouse', component: UnassignedMouseComponent},
      { path: 'assigned-screens', component: AssignedScreensComponent},
      { path: 'unassigned-screens', component: UnassignedScreensComponent},
      { path: 'assigned-printers', component: AssignedPrintersComponent},
      { path: 'unassigned-printers', component: UnassignedPrintersComponent},
      { path: 'assigned-power-cables', component: AssignedPowerCablesComponent},
      { path: 'unassigned-power-cables', component: UnassignedPowerCablesComponent},
      { path: 'assigned-stationery', component: AssignedStationeryComponent},
      { path: 'unassigned-stationery', component: UnassignedStationeryComponent},
     
      
    ]
  }];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
