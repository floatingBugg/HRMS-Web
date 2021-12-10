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


@NgModule({
  declarations: [
    InventoryComponent,
    LaptopComponent,
    InventoryLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InventoryModule { }
