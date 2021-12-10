import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryLayoutComponent } from './components/inventory-layout/inventory-layout.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { LaptopComponent } from './components/laptop/laptop.component';

const routes: Routes = [
  {
    path: '', component: InventoryLayoutComponent, children: [
      { path: '', component: InventoryComponent },
      { path: 'laptop', component: LaptopComponent }
    ]
  }];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
