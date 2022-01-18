import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcComponent } from './components/ac/ac.component';
import { AssignedAcComponent } from './components/ac/assigned-ac/assigned-ac.component';
import { UnassignedAcComponent } from './components/ac/unassigned-ac/unassigned-ac.component';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';

import { AssetReserveComponent } from './components/asset-reserve/asset-reserve.component';
import { AssignComponent } from './components/assign/assign.component';
import { AssignedCamerasComponent } from './components/cctv-cameras/assigned-cameras/assigned-cameras.component';
import { CctvCamerasComponent } from './components/cctv-cameras/cctv-cameras.component';
import { UnassignedCamerasComponent } from './components/cctv-cameras/unassigned-cameras/unassigned-cameras.component';
import { AssignedDrivesComponent } from './components/drives/assigned-drives/assigned-drives.component';
import { DrivesComponent } from './components/drives/drives.component';
import { UnassignedDrivesComponent } from './components/drives/unassigned-drives/unassigned-drives.component';
import { AssignedFansComponent } from './components/fans/assigned-fans/assigned-fans.component';
import { FansComponent } from './components/fans/fans.component';
import { UnassignedFansComponent } from './components/fans/unassigned-fans/unassigned-fans.component';
import { AssignedFurnitureComponent } from './components/furniture/assigned-furniture/assigned-furniture.component';
import { FurnitureComponent } from './components/furniture/furniture.component';
import { UnassignedFurnitureComponent } from './components/furniture/unassigned-furniture/unassigned-furniture.component';
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
import { ViewAssetComponent } from './components/view-asset/view-asset.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryLayoutComponent,
    children: [
      { path: '', component: InventoryComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'screens', component: ScreensComponent },
      { path: 'drives', component: DrivesComponent },
      { path: 'cctv-cameras', component: CctvCamerasComponent },
      { path: 'ac', component: AcComponent },
      { path: 'printers', component: PrintersComponent },
      { path: 'key-board', component: KeyBoardComponent },
      { path: 'mouse', component: MouseComponent },
      { path: 'power-cables', component: PowerCablesComponent },
      { path: 'stationery', component: StationeryComponent },
      { path: 'fans', component: FansComponent },
      { path: 'furniture', component: FurnitureComponent },
      { path: 'asset-reserve/:id', component: AssetReserveComponent },
      { path: 'asset-reserve/:id', component: AssetReserveComponent },
      { path: 'assigned-ac', component: AssignedAcComponent },
      { path: 'unassigned-ac', component: UnassignedAcComponent },
      { path: 'assigned-cameras', component: AssignedCamerasComponent },
      { path: 'unassigned-cameras', component: UnassignedCamerasComponent },
      { path: 'assigned-drives', component: AssignedDrivesComponent },
      { path: 'unassigned-drives', component: UnassignedDrivesComponent },
      { path: 'assigned-fans', component: AssignedFansComponent },
      { path: 'unassigned-fans', component: UnassignedFansComponent },
      { path: 'assigned-furniture', component: AssignedFurnitureComponent },
      { path: 'unassigned-furniture', component: UnassignedFurnitureComponent },
      { path: 'assigned-keyboard', component: AssignedKeyboardComponent },
      { path: 'unassigned-keyboard', component: UnassignedKeyboardComponent },
      { path: 'assigned-laptops', component: AssignedLaptopsComponent },
      { path: 'unassigned-laptops', component: UnassignedLaptopsComponent },
      { path: 'assigned-mouse', component: AssignedMouseComponent },
      { path: 'unassigned-mouse', component: UnassignedMouseComponent },
      { path: 'assigned-power-cables',component: AssignedPowerCablesComponent},
      { path: 'unassigned-power-cables',component: UnassignedPowerCablesComponent},
      { path: 'assigned-printers', component: AssignedPrintersComponent },
      { path: 'unassigned-printers', component: UnassignedPrintersComponent },
      { path: 'assigned-screens', component: AssignedScreensComponent },
      { path: 'unassigned-screens', component: UnassignedScreensComponent },
      { path: 'assigned-stationery', component: AssignedStationeryComponent },
      { path: 'unassigned-stationery',component: UnassignedStationeryComponent},
      { path: 'all-employees',component: AllEmployeesComponent},
      { path: 'assign',component: AssignComponent},
      { path: 'viewasset/:id',component: ViewAssetComponent},
     
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
