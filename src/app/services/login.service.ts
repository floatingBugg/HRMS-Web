import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { LoginValidationComponent } from '../components/login/login-validation/login-validation/login-validation.component';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorage } from 'src/assets/localStorage';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required
    ]),

  });

  constructor(
    private loginService: LoginServiceService,
    private router: Router,
    public dialog: MatDialog
  ) {
    // this.getForm()
  }
rememberlogin:boolean=false;
  loginUser() {
    if (this.loginForm.valid) {
      let data = this.loginForm.value;
      this.loginService.login(data).subscribe((result) => {
        if (result.success) {
          localStorage.setItem('token', result.data.token);
          debugger
          localStorage.setItem('loggedIn_UserId', result.data.userId);
          localStorage.setItem('loggedIn_UserName', result.data.userName);
          localStorage.setItem('loggedIn_RoleId', result.data.roleId);
          console.log(result)
          // this.remember();
          this.router.navigate(['/home']);
        } else {
          this.dialog.open(LoginValidationComponent);
        }
      });
    }
  }

  // remember(){
  //   debugger
  //   this.rememberlogin ? localStorage.setItem(LocalStorage.LoginForm, JSON.stringify(this.loginForm.value)):localStorage.removeItem(LocalStorage.LoginForm)
  // }
// getForm(){
//   debugger
//   var existingValue=localStorage.getItem(LocalStorage.LoginForm)
//   if(existingValue){
//     this.rememberlogin=true;
//     let loginForm:any=JSON.stringify(localStorage.getItem(LocalStorage.LoginForm))
//     this.loginForm.patchValue(loginForm)
//   }
// }
  logoutUser()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  get user() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  isLoggedIn(){
   return localStorage.getItem('token')
  }
}
