import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'' , redirectTo:'/login',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'dashboard',
  canActivate: [AuthGuard],
  loadChildren:()=> import('./modules/dashboard/dashboard.module').then((m) =>m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
