import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './components/employee/employee.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee/view-employee.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SuccessDialogComponent } from './components/add-employee/success-dialog/success-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginInterceptor } from 'src/app/interceptor/login.interceptor';
import { AddEmployeeFailureDialogComponent } from './components/add-employee/add-employee-failure-dialog/add-employee-failure-dialog.component';
import { AssignManagerComponent } from './components/assign-manager/assign-manager.component';
import { AssignAssetComponent } from './components/assign-asset/assign-asset.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    SidebarComponent,
    EmployeeComponent,
    DeleteEmployeeComponent,
    SuccessDialogComponent,
    ViewEmployeeComponent,
    AddEmployeeFailureDialogComponent,
    AssignManagerComponent,
    AssignAssetComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    RouterModule,
    MatDialogModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor
    }
  ]
})
export class DashboardModule { }
