import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './components/inventory/inventory.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { LaptopComponent } from './components/laptop/laptop.component';
import {InventoryRoutingModule} from './inventory-routing.module';
import { InventoryLayoutComponent } from './components/inventory-layout/inventory-layout.component'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScreensComponent } from './components/screens/screens.component';
import { DrivesComponent } from './components/drives/drives.component';
import { CctvCamerasComponent } from './components/cctv-cameras/cctv-cameras.component';
import { AcComponent } from './components/ac/ac.component';
import { PrintersComponent } from './components/printers/printers.component';
import { KeyBoardComponent } from './components/key-board/key-board.component';
import { MouseComponent } from './components/mouse/mouse.component';
import { PowerCablesComponent } from './components/power-cables/power-cables.component';
import { StationeryComponent } from './components/stationery/stationery.component';
import { FansComponent } from './components/fans/fans.component';
import { FurnitureComponent } from './components/furniture/furniture.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AssetReserveComponent } from './components/asset-reserve/asset-reserve.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AssignedLaptopsComponent } from './components/laptop/assigned-laptops/assigned-laptops.component';
import { UnassignedLaptopsComponent } from './components/laptop/unassigned-laptops/unassigned-laptops.component';
import { AssignedScreensComponent } from './components/screens/assigned-screens/assigned-screens.component';
import { UnassignedScreensComponent } from './components/screens/unassigned-screens/unassigned-screens.component';
import { AssignedPrintersComponent } from './components/printers/assigned-printers/assigned-printers.component';
import { UnassignedPrintersComponent } from './components/printers/unassigned-printers/unassigned-printers.component';
import { AssignedPowerCablesComponent } from './components/power-cables/assigned-power-cables/assigned-power-cables.component';
import { UnassignedPowerCablesComponent } from './components/power-cables/unassigned-power-cables/unassigned-power-cables.component';
import { AssignedMouseComponent } from './components/mouse/assigned-mouse/assigned-mouse.component';
import { UnassignedMouseComponent } from './components/mouse/unassigned-mouse/unassigned-mouse.component';
import { AssignedKeyboardComponent } from './components/key-board/assigned-keyboard/assigned-keyboard.component';
import { UnassignedKeyboardComponent } from './components/key-board/unassigned-keyboard/unassigned-keyboard.component';
import { AssignedStationeryComponent } from './components/stationery/assigned-stationery/assigned-stationery.component';
import { UnassignedStationeryComponent } from './components/stationery/unassigned-stationery/unassigned-stationery.component';
import { AssignedAcComponent } from './components/ac/assigned-ac/assigned-ac.component';
import { UnassignedAcComponent } from './components/ac/unassigned-ac/unassigned-ac.component';
import { AssignedCamerasComponent } from './components/cctv-cameras/assigned-cameras/assigned-cameras.component';
import { UnassignedCamerasComponent } from './components/cctv-cameras/unassigned-cameras/unassigned-cameras.component';
import { AssignedDrivesComponent } from './components/drives/assigned-drives/assigned-drives.component';
import { UnassignedDrivesComponent } from './components/drives/unassigned-drives/unassigned-drives.component';
import { AssignedFansComponent } from './components/fans/assigned-fans/assigned-fans.component';
import { UnassignedFansComponent } from './components/fans/unassigned-fans/unassigned-fans.component';
import { AssignedFurnitureComponent } from './components/furniture/assigned-furniture/assigned-furniture.component';
import { UnassignedFurnitureComponent } from './components/furniture/unassigned-furniture/unassigned-furniture.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';
import { AssignComponent } from './components/assign/assign.component';
import { UnassignAssetComponent } from './components/unassign-asset/unassign-asset.component';
import { ViewAssetComponent } from './components/view-asset/view-asset.component';



@NgModule({
  declarations: [
    InventoryComponent,
    LaptopComponent,
    InventoryLayoutComponent,
    ScreensComponent,
    DrivesComponent,
    CctvCamerasComponent,
    AcComponent,
    PrintersComponent,
    KeyBoardComponent,
    MouseComponent,
    PowerCablesComponent,
    StationeryComponent,
    FansComponent,
    FurnitureComponent,
    AssetReserveComponent,
    AssignedLaptopsComponent,
    UnassignedLaptopsComponent,
    AssignedScreensComponent,
    UnassignedScreensComponent,
    AssignedPrintersComponent,
    UnassignedPrintersComponent,
    AssignedPowerCablesComponent,
    UnassignedPowerCablesComponent,
    AssignedMouseComponent,
    UnassignedMouseComponent,
    AssignedKeyboardComponent,
    UnassignedKeyboardComponent,
    AssignedStationeryComponent,
    UnassignedStationeryComponent,
    AssignedAcComponent,
    UnassignedAcComponent,
    AssignedCamerasComponent,
    UnassignedCamerasComponent,
    AssignedDrivesComponent,
    UnassignedDrivesComponent,
    AssignedFansComponent,
    UnassignedFansComponent,
    AssignedFurnitureComponent,
    UnassignedFurnitureComponent,
    AllEmployeesComponent,
    AssignComponent,
    UnassignAssetComponent,
    ViewAssetComponent,
   

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatRippleModule,
    MatNativeDateModule,
    MatSelectModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class InventoryModule {
  
 }
