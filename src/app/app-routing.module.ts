import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LeaveComponent } from './leave/leave.component';
import { LeaveformComponent } from './leaveform/leaveform.component';
import { ViewleaveComponent } from './viewleave/viewleave.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
    },
    {
        path: 'inventory',
        loadChildren: () => import('./modules/inventory/inventory.module').then((m) => m.InventoryModule)
    },
    {
        path:'leave',
        component:LeaveComponent, 
    },
    {
        path:'leaveform',
        component:LeaveformComponent,
    },
    {
        path:'viewleave',
        component:ViewleaveComponent,
    },
    

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
