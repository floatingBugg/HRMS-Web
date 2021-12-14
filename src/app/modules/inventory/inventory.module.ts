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
    FormsModule
  ]
})
export class InventoryModule { }
