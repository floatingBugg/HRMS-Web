
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { LoginInterceptor } from './interceptor/login.interceptor'
import { AuthGuard } from './guards/auth.guard';
import { MatDialogModule ,MatDialogConfig} from '@angular/material/dialog';
import { LoginValidationComponent } from './components/login/login-validation/login-validation/login-validation.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LogoutValidationComponent } from './components/login/logout-validation/logout-validation.component';
import { AllEmployeesComponent } from './modules/inventory/components/all-employees/all-employees.component';
import { AssignComponent } from './modules/inventory/components/assign/assign.component';
import { LeaveComponent } from './leave/leave.component';
import { LeaveformComponent } from './leaveform/leaveform.component';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { ViewleaveComponent } from './viewleave/viewleave.component';
import { EditleaveComponent } from './editleave/editleave.component';
// import { MatCheckbox } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginValidationComponent,
    SpinnerComponent,
    LogoutValidationComponent,
    LeaveComponent,
    LeaveformComponent,
    ViewleaveComponent,
    EditleaveComponent,
    
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRippleModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule
    // MatCheckbox
    
    // MatDialogConfig


  ],
  providers: [LoginService, { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true }, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[AllEmployeesComponent, AssignComponent,LeaveformComponent],
  
})
export class AppModule { }
