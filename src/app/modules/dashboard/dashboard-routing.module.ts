import { EmployeeComponent } from './components/employee/employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeeComponent } from './components/view-employee/view-employee/view-employee.component';


const routes: Routes = [{path:'',  component: DashboardComponent, children:[
  {path:'addemployee', component:AddEmployeeComponent},
  {path:'editemployee/:id', component:EditEmployeeComponent},
  {path:'viewemp/:id', component:ViewEmployeeComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'', redirectTo:'/dashboard/employee', pathMatch:'full'},
  {path:'**', redirectTo:'/dashboard/employee', pathMatch:'full'}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
